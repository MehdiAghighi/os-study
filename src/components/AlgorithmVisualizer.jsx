import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';

// CPU Scheduling Algorithm Visualizer
export function SchedulingVisualizer() {
  const [algorithm, setAlgorithm] = useState('fifo');
  const [processes, setProcesses] = useState([
    { id: 'P1', arrivalTime: 0, burstTime: 5, color: 'bg-blue-500' },
    { id: 'P2', arrivalTime: 1, burstTime: 3, color: 'bg-emerald-500' },
    { id: 'P3', arrivalTime: 2, burstTime: 4, color: 'bg-amber-500' },
    { id: 'P4', arrivalTime: 3, burstTime: 2, color: 'bg-purple-500' },
  ]);
  const [quantum, setQuantum] = useState(2);
  const [timeline, setTimeline] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [metrics, setMetrics] = useState({});

  const calculateSchedule = () => {
    let result = [];
    let processQueue = processes.map(p => ({ ...p, remainingTime: p.burstTime, startTime: -1, endTime: -1 }));
    let time = 0;

    switch (algorithm) {
      case 'fifo':
        // FIFO - First In First Out
        processQueue.sort((a, b) => a.arrivalTime - b.arrivalTime);
        processQueue.forEach(p => {
          if (time < p.arrivalTime) time = p.arrivalTime;
          p.startTime = time;
          for (let i = 0; i < p.burstTime; i++) {
            result.push({ time: time + i, process: p.id, color: p.color });
          }
          time += p.burstTime;
          p.endTime = time;
        });
        break;

      case 'sjf':
        // SJF - Shortest Job First (Non-preemptive)
        let completed = 0;
        const n = processQueue.length;
        while (completed < n) {
          let available = processQueue.filter(p => p.arrivalTime <= time && p.remainingTime > 0);
          if (available.length === 0) {
            result.push({ time, process: 'idle', color: 'bg-gray-600' });
            time++;
            continue;
          }
          available.sort((a, b) => a.burstTime - b.burstTime);
          let p = available[0];
          if (p.startTime === -1) p.startTime = time;
          for (let i = 0; i < p.burstTime; i++) {
            result.push({ time: time + i, process: p.id, color: p.color });
          }
          time += p.burstTime;
          p.endTime = time;
          p.remainingTime = 0;
          completed++;
        }
        break;

      case 'srtf':
        // SRTF - Shortest Remaining Time First (Preemptive)
        let done = 0;
        const total = processQueue.length;
        while (done < total) {
          let available = processQueue.filter(p => p.arrivalTime <= time && p.remainingTime > 0);
          if (available.length === 0) {
            result.push({ time, process: 'idle', color: 'bg-gray-600' });
            time++;
            continue;
          }
          available.sort((a, b) => a.remainingTime - b.remainingTime);
          let p = available[0];
          if (p.startTime === -1) p.startTime = time;
          result.push({ time, process: p.id, color: p.color });
          p.remainingTime--;
          time++;
          if (p.remainingTime === 0) {
            p.endTime = time;
            done++;
          }
        }
        break;

      case 'rr':
        // Round Robin
        let queue = [];
        let currentTime = 0;
        let procs = processQueue.map(p => ({ ...p }));
        let finished = 0;
        const pCount = procs.length;

        while (finished < pCount) {
          // Add newly arrived processes
          procs.forEach(p => {
            if (p.arrivalTime === currentTime && !queue.includes(p) && p.remainingTime > 0) {
              queue.push(p);
            }
          });

          if (queue.length === 0) {
            result.push({ time: currentTime, process: 'idle', color: 'bg-gray-600' });
            currentTime++;
            continue;
          }

          let p = queue.shift();
          if (p.startTime === -1) p.startTime = currentTime;

          let execTime = Math.min(quantum, p.remainingTime);
          for (let i = 0; i < execTime; i++) {
            result.push({ time: currentTime + i, process: p.id, color: p.color });
          }
          currentTime += execTime;
          p.remainingTime -= execTime;

          // Add newly arrived processes during execution
          procs.forEach(proc => {
            if (proc.arrivalTime > currentTime - execTime && proc.arrivalTime <= currentTime &&
                !queue.includes(proc) && proc.remainingTime > 0 && proc !== p) {
              queue.push(proc);
            }
          });

          if (p.remainingTime > 0) {
            queue.push(p);
          } else {
            p.endTime = currentTime;
            finished++;
          }
        }
        break;
    }

    // Calculate metrics
    let totalWait = 0, totalTurnaround = 0;
    processQueue.forEach(p => {
      const turnaround = p.endTime - p.arrivalTime;
      const wait = turnaround - p.burstTime;
      totalWait += wait;
      totalTurnaround += turnaround;
    });

    setMetrics({
      avgWaitTime: (totalWait / processQueue.length).toFixed(2),
      avgTurnaroundTime: (totalTurnaround / processQueue.length).toFixed(2),
    });

    setTimeline(result);
    setCurrentStep(0);
  };

  useEffect(() => {
    calculateSchedule();
  }, [algorithm, processes, quantum]);

  useEffect(() => {
    if (isPlaying && currentStep < timeline.length - 1) {
      const timer = setTimeout(() => {
        setCurrentStep(prev => prev + 1);
      }, 500);
      return () => clearTimeout(timer);
    } else if (currentStep >= timeline.length - 1) {
      setIsPlaying(false);
    }
  }, [isPlaying, currentStep, timeline.length]);

  return (
    <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
      <h3 className="text-xl font-bold text-white mb-4">شبیه‌ساز الگوریتم‌های زمان‌بندی CPU</h3>

      {/* Algorithm Selection */}
      <div className="flex flex-wrap gap-2 mb-6">
        {[
          { id: 'fifo', label: 'FIFO' },
          { id: 'sjf', label: 'SJF' },
          { id: 'srtf', label: 'SRTF' },
          { id: 'rr', label: 'Round Robin' },
        ].map(alg => (
          <button
            key={alg.id}
            onClick={() => setAlgorithm(alg.id)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              algorithm === alg.id
                ? 'bg-blue-500 text-white'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            {alg.label}
          </button>
        ))}
      </div>

      {/* Quantum slider for RR */}
      {algorithm === 'rr' && (
        <div className="mb-6">
          <label className="text-gray-400 text-sm mb-2 block">Time Quantum: {quantum}</label>
          <input
            type="range"
            min="1"
            max="5"
            value={quantum}
            onChange={(e) => setQuantum(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      )}

      {/* Process Table */}
      <div className="mb-6 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-gray-400">
              <th className="p-2 text-right">فرآیند</th>
              <th className="p-2 text-center">زمان ورود</th>
              <th className="p-2 text-center">زمان پردازش</th>
            </tr>
          </thead>
          <tbody>
            {processes.map(p => (
              <tr key={p.id} className="border-t border-gray-800">
                <td className="p-2">
                  <span className={`inline-block w-3 h-3 rounded-full ${p.color} ml-2`}></span>
                  {p.id}
                </td>
                <td className="p-2 text-center text-gray-300">{p.arrivalTime}</td>
                <td className="p-2 text-center text-gray-300">{p.burstTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Timeline Visualization */}
      <div className="mb-6">
        <h4 className="text-gray-400 text-sm mb-2">نمودار زمان‌بندی (Gantt Chart):</h4>
        <div className="flex overflow-x-auto pb-2">
          {timeline.map((slot, idx) => (
            <div
              key={idx}
              className={`
                min-w-[40px] h-12 flex items-center justify-center text-xs font-bold text-white
                border-l border-gray-700 first:border-l-0 transition-opacity
                ${slot.color}
                ${idx <= currentStep ? 'opacity-100' : 'opacity-30'}
              `}
            >
              {slot.process}
            </div>
          ))}
        </div>
        <div className="flex overflow-x-auto">
          {timeline.map((slot, idx) => (
            <div key={idx} className="min-w-[40px] text-center text-xs text-gray-500">
              {slot.time}
            </div>
          ))}
          {timeline.length > 0 && (
            <div className="min-w-[40px] text-center text-xs text-gray-500">
              {timeline[timeline.length - 1].time + 1}
            </div>
          )}
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-2 mb-6">
        <button
          onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
          className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700"
        >
          <ChevronRight size={20} />
        </button>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="p-2 bg-blue-500 rounded-lg hover:bg-blue-600"
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>
        <button
          onClick={() => setCurrentStep(Math.min(timeline.length - 1, currentStep + 1))}
          className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => { setCurrentStep(0); setIsPlaying(false); }}
          className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700"
        >
          <RotateCcw size={20} />
        </button>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-800/50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-blue-400">{metrics.avgWaitTime}</div>
          <div className="text-gray-500 text-sm">میانگین زمان انتظار</div>
        </div>
        <div className="bg-gray-800/50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-emerald-400">{metrics.avgTurnaroundTime}</div>
          <div className="text-gray-500 text-sm">میانگین زمان گردش</div>
        </div>
      </div>
    </div>
  );
}

// Peterson Algorithm Visualizer
export function PetersonVisualizer() {
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const steps = [
    { p0: 'flag[0] = true', p1: '-', flag: [true, false], turn: 0, inCS: [false, false], desc: 'P0 علاقه خود را اعلام می‌کند' },
    { p0: 'turn = 1', p1: '-', flag: [true, false], turn: 1, inCS: [false, false], desc: 'P0 حق تقدم را به P1 می‌دهد' },
    { p0: 'while (flag[1] && turn==1)?', p1: '-', flag: [true, false], turn: 1, inCS: [false, false], desc: 'P0 بررسی می‌کند: شرط برقرار نیست پس وارد می‌شود' },
    { p0: 'در ناحیه بحرانی', p1: 'flag[1] = true', flag: [true, true], turn: 1, inCS: [true, false], desc: 'P0 در CS، P1 علاقه اعلام می‌کند' },
    { p0: 'در ناحیه بحرانی', p1: 'turn = 0', flag: [true, true], turn: 0, inCS: [true, false], desc: 'P1 حق تقدم را به P0 می‌دهد' },
    { p0: 'در ناحیه بحرانی', p1: 'while (flag[0] && turn==0)?', flag: [true, true], turn: 0, inCS: [true, false], desc: 'P1 بررسی می‌کند: شرط برقرار است پس منتظر می‌ماند' },
    { p0: 'flag[0] = false', p1: 'منتظر...', flag: [false, true], turn: 0, inCS: [false, false], desc: 'P0 از CS خارج می‌شود' },
    { p0: '-', p1: 'وارد ناحیه بحرانی', flag: [false, true], turn: 0, inCS: [false, true], desc: 'P1 اکنون می‌تواند وارد CS شود' },
  ];

  useEffect(() => {
    if (isPlaying && step < steps.length - 1) {
      const timer = setTimeout(() => setStep(s => s + 1), 1500);
      return () => clearTimeout(timer);
    } else if (step >= steps.length - 1) {
      setIsPlaying(false);
    }
  }, [isPlaying, step]);

  const current = steps[step];

  return (
    <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
      <h3 className="text-xl font-bold text-white mb-4">شبیه‌ساز الگوریتم Peterson</h3>

      {/* State Display */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className={`p-4 rounded-lg border-2 ${current.inCS[0] ? 'border-emerald-500 bg-emerald-500/10' : 'border-gray-700 bg-gray-800/50'}`}>
          <h4 className="text-blue-400 font-bold mb-2">Process 0</h4>
          <p className="text-gray-300 text-sm">{current.p0}</p>
        </div>
        <div className={`p-4 rounded-lg border-2 ${current.inCS[1] ? 'border-emerald-500 bg-emerald-500/10' : 'border-gray-700 bg-gray-800/50'}`}>
          <h4 className="text-purple-400 font-bold mb-2">Process 1</h4>
          <p className="text-gray-300 text-sm">{current.p1}</p>
        </div>
      </div>

      {/* Variables */}
      <div className="flex justify-center gap-8 mb-6">
        <div className="text-center">
          <div className="text-gray-400 text-sm mb-1">flag[0]</div>
          <div className={`text-xl font-bold ${current.flag[0] ? 'text-emerald-400' : 'text-red-400'}`}>
            {current.flag[0] ? 'true' : 'false'}
          </div>
        </div>
        <div className="text-center">
          <div className="text-gray-400 text-sm mb-1">flag[1]</div>
          <div className={`text-xl font-bold ${current.flag[1] ? 'text-emerald-400' : 'text-red-400'}`}>
            {current.flag[1] ? 'true' : 'false'}
          </div>
        </div>
        <div className="text-center">
          <div className="text-gray-400 text-sm mb-1">turn</div>
          <div className="text-xl font-bold text-amber-400">{current.turn}</div>
        </div>
      </div>

      {/* Description */}
      <div className="bg-blue-500/10 rounded-lg p-4 mb-6 text-center">
        <p className="text-blue-300">{current.desc}</p>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-2">
        <button
          onClick={() => setStep(Math.max(0, step - 1))}
          className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700"
        >
          <ChevronRight size={20} />
        </button>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="p-2 bg-blue-500 rounded-lg hover:bg-blue-600"
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>
        <button
          onClick={() => setStep(Math.min(steps.length - 1, step + 1))}
          className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => { setStep(0); setIsPlaying(false); }}
          className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700"
        >
          <RotateCcw size={20} />
        </button>
      </div>

      {/* Progress */}
      <div className="mt-4">
        <div className="flex justify-between text-xs text-gray-500 mb-1">
          <span>مرحله {step + 1}</span>
          <span>{steps.length} مرحله</span>
        </div>
        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500 transition-all duration-300"
            style={{ width: `${((step + 1) / steps.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}

// Banker's Algorithm Visualizer
export function BankerVisualizer() {
  const [available, setAvailable] = useState([3, 3, 2]);
  const [maximum, setMaximum] = useState([
    [7, 5, 3],
    [3, 2, 2],
    [9, 0, 2],
    [2, 2, 2],
    [4, 3, 3]
  ]);
  const [allocation, setAllocation] = useState([
    [0, 1, 0],
    [2, 0, 0],
    [3, 0, 2],
    [2, 1, 1],
    [0, 0, 2]
  ]);
  const [result, setResult] = useState(null);

  const runBanker = () => {
    const n = maximum.length;
    const m = available.length;

    // Calculate need matrix
    const need = maximum.map((max, i) =>
      max.map((val, j) => val - allocation[i][j])
    );

    // Work array starts with available
    const work = [...available];
    const finish = new Array(n).fill(false);
    const safeSequence = [];

    let found = true;
    while (found && safeSequence.length < n) {
      found = false;
      for (let i = 0; i < n; i++) {
        if (!finish[i]) {
          let canAllocate = true;
          for (let j = 0; j < m; j++) {
            if (need[i][j] > work[j]) {
              canAllocate = false;
              break;
            }
          }
          if (canAllocate) {
            for (let j = 0; j < m; j++) {
              work[j] += allocation[i][j];
            }
            finish[i] = true;
            safeSequence.push(i);
            found = true;
          }
        }
      }
    }

    const isSafe = safeSequence.length === n;
    setResult({
      isSafe,
      sequence: safeSequence,
      need
    });
  };

  useEffect(() => {
    runBanker();
  }, [available, maximum, allocation]);

  return (
    <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
      <h3 className="text-xl font-bold text-white mb-4">شبیه‌ساز الگوریتم بانکدار</h3>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Allocation Matrix */}
        <div>
          <h4 className="text-gray-400 text-sm mb-2">ماتریس تخصیص (Allocation)</h4>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-gray-500">
                <th className="p-2">فرآیند</th>
                <th className="p-2">A</th>
                <th className="p-2">B</th>
                <th className="p-2">C</th>
              </tr>
            </thead>
            <tbody>
              {allocation.map((row, i) => (
                <tr key={i} className="border-t border-gray-800">
                  <td className="p-2 text-gray-300">P{i}</td>
                  {row.map((val, j) => (
                    <td key={j} className="p-2 text-center text-blue-400">{val}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Maximum Matrix */}
        <div>
          <h4 className="text-gray-400 text-sm mb-2">ماتریس حداکثر (Maximum)</h4>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-gray-500">
                <th className="p-2">فرآیند</th>
                <th className="p-2">A</th>
                <th className="p-2">B</th>
                <th className="p-2">C</th>
              </tr>
            </thead>
            <tbody>
              {maximum.map((row, i) => (
                <tr key={i} className="border-t border-gray-800">
                  <td className="p-2 text-gray-300">P{i}</td>
                  {row.map((val, j) => (
                    <td key={j} className="p-2 text-center text-purple-400">{val}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Need Matrix */}
      {result && (
        <div className="mb-6">
          <h4 className="text-gray-400 text-sm mb-2">ماتریس نیاز (Need = Max - Allocation)</h4>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-gray-500">
                <th className="p-2">فرآیند</th>
                <th className="p-2">A</th>
                <th className="p-2">B</th>
                <th className="p-2">C</th>
              </tr>
            </thead>
            <tbody>
              {result.need.map((row, i) => (
                <tr key={i} className="border-t border-gray-800">
                  <td className="p-2 text-gray-300">P{i}</td>
                  {row.map((val, j) => (
                    <td key={j} className="p-2 text-center text-amber-400">{val}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Available Resources */}
      <div className="mb-6">
        <h4 className="text-gray-400 text-sm mb-2">منابع در دسترس (Available)</h4>
        <div className="flex gap-4 justify-center">
          {['A', 'B', 'C'].map((res, i) => (
            <div key={res} className="text-center">
              <div className="text-gray-500 text-xs mb-1">{res}</div>
              <div className="text-xl font-bold text-emerald-400">{available[i]}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Result */}
      {result && (
        <div className={`rounded-lg p-4 text-center ${
          result.isSafe ? 'bg-emerald-500/10 border border-emerald-500/30' : 'bg-red-500/10 border border-red-500/30'
        }`}>
          {result.isSafe ? (
            <>
              <p className="text-emerald-400 font-bold mb-2">سیستم در حالت امن است</p>
              <p className="text-gray-300">
                توالی امن: {result.sequence.map(i => `P${i}`).join(' → ')}
              </p>
            </>
          ) : (
            <p className="text-red-400 font-bold">سیستم در حالت ناامن است - امکان بن‌بست وجود دارد</p>
          )}
        </div>
      )}
    </div>
  );
}

// Process State Diagram
export function ProcessStateDiagram() {
  const [currentState, setCurrentState] = useState('new');

  const states = {
    new: { label: 'جدید', color: 'bg-gray-500', next: ['ready'] },
    ready: { label: 'آماده', color: 'bg-blue-500', next: ['running'] },
    running: { label: 'در حال اجرا', color: 'bg-emerald-500', next: ['ready', 'blocked', 'terminated'] },
    blocked: { label: 'مسدود', color: 'bg-amber-500', next: ['ready'] },
    terminated: { label: 'خاتمه', color: 'bg-red-500', next: [] }
  };

  const transitions = {
    'new→ready': 'Admit',
    'ready→running': 'Dispatch',
    'running→ready': 'Timeout',
    'running→blocked': 'I/O Request',
    'blocked→ready': 'I/O Complete',
    'running→terminated': 'Exit'
  };

  return (
    <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
      <h3 className="text-xl font-bold text-white mb-6">نمودار حالات فرآیند</h3>

      {/* State Circles */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {Object.entries(states).map(([key, state]) => (
          <button
            key={key}
            onClick={() => setCurrentState(key)}
            className={`
              w-24 h-24 rounded-full flex items-center justify-center text-white font-bold
              transition-all transform
              ${state.color}
              ${currentState === key ? 'scale-110 ring-4 ring-white/30' : 'opacity-70 hover:opacity-100'}
            `}
          >
            {state.label}
          </button>
        ))}
      </div>

      {/* Current State Info */}
      <div className="bg-gray-800/50 rounded-lg p-4 mb-4">
        <p className="text-gray-400 text-sm mb-2">حالت فعلی:</p>
        <p className={`text-xl font-bold ${states[currentState].color.replace('bg-', 'text-')}`}>
          {states[currentState].label}
        </p>
      </div>

      {/* Transitions */}
      <div className="space-y-2">
        <p className="text-gray-400 text-sm">انتقال‌های ممکن:</p>
        {states[currentState].next.length > 0 ? (
          states[currentState].next.map(nextState => (
            <button
              key={nextState}
              onClick={() => setCurrentState(nextState)}
              className="w-full p-3 bg-gray-800 hover:bg-gray-700 rounded-lg text-right transition-colors"
            >
              <span className="text-gray-400">{transitions[`${currentState}→${nextState}`]}:</span>
              <span className="text-white mr-2">{states[nextState].label}</span>
            </button>
          ))
        ) : (
          <p className="text-gray-500">این حالت نهایی است</p>
        )}
      </div>
    </div>
  );
}

export default { SchedulingVisualizer, PetersonVisualizer, BankerVisualizer, ProcessStateDiagram };
