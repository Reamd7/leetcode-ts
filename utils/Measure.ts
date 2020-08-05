import process from 'process';
function format(bytes: number) {
  return `${(bytes)}B ${(bytes/1024)}KB ${(bytes/1024/1024)}MB`
}

export class Measure {
  static prev = {
    cpu: process.cpuUsage(),
    mem: process.memoryUsage(),
    time: process.hrtime.bigint()
  };
  static start(){
    Measure.prev = {
      cpu: process.cpuUsage(),
      mem: process.memoryUsage(),
      time: process.hrtime.bigint()
    };
    console.log(`start Measure`);
  }
  static stop(){
    const now = {
      mem: process.memoryUsage(),
      time: process.hrtime.bigint()
    };
    console.log(`Process:
  基准测试耗时 ${(now.time - Measure.prev.time)} 纳秒
  基准测试耗时 ${(now.time - Measure.prev.time) / (10n ** 6n)} 毫秒
  内存占用：
  heapTotal: ${format(now.mem.heapTotal - Measure.prev.mem.heapTotal)}
  heapUsed: ${format(now.mem.heapUsed - Measure.prev.mem.heapUsed)}
  rss: ${format(now.mem.rss - Measure.prev.mem.rss)}
  CPU占用时间: ${JSON.stringify(process.cpuUsage(
    Measure.prev.cpu
  ))}
`)
    console.log('----------------------------------------');
  }
}

export function MeasureWrapper(fn: ()=>any) {
  Measure.start()
  const res = fn()
  Measure.stop()
  return res
}
