//初始化变量
let isScrolling = false;
let scrollInterval;
let scrollSpeed = 200; // 初始速度（ms）
let lineCount = 0;
let warnCount = 0;
let errorCount = 0;

//自动加速计数器
let speedIncreaseCount = 0;
const maxSpeed = 50; // 最大速度（ms）

//DOM元素
const terminalOutput = document.getElementById('terminal-output')

//日志类型数组
const logTypes = ['INFO', 'WARN', 'ERROR', 'SUCCESS', 'DEBUG'];

// 日志内容库
const logMessages = [
  "System core modules initialized successfully",
  "Memory allocation failure occurred - reclaiming resources",
  "User authentication verified: token expires in 7200 seconds",
  "Network traffic anomaly detected - activating protocol #5",
  "Database indexing optimized - query speed increased by 42%",
  "Permission error: cannot access /var/log/app.log",
  "Initiating cache refresh cycle - expected duration: 120s",
  "Security scan complete: discovered 2 critical vulnerabilities",
  "API response time threshold exceeded: current avg. 320ms",
  "Distributed task queue reconnected: 127 tasks pending",
  "Temperature warning: CPU at 72°C - exceeding safe limit",
  "Security audit: admin executed privileged command from 192.168.1.101",
  "Daily backup completed: duration 8m24s, size 28.4GB",
  "Unauthorized API access attempt detected - source: 203.0.113.45",
  "Memory defragmentation process completed: 142MB released",
  "Scheduled maintenance: database integrity verification started",
  "Security certificate upgraded to TLSv1.3 standard",
  "Application cache cleared: removed 125 expired entries",
  "Database connection pool at capacity: max connections (100)",
  "Security alert: 3 consecutive failed login attempts",
  "Network throughput unusually high: current usage at 98%",
  "Backup validation successful: integrity confirmed",
  "Disk I/O performance warning: /dev/sdb averaging 15ms",
  "Database transaction processing speed decreased",
  "API service restart completed successfully",
  "Distributed cache synchronization: consistency verified",
  "Mail queue backlog: 12,425 messages awaiting processing",
  "System health diagnostic: all parameters within norms",
  "Memory optimization routine started: expected gain 256MB",
  "Terminated abnormal process: PID 2345 identified as threat",
  "System log compression process initiated: estimated 45s"
];

// 添加终端日志行
function addTerminalLine() {
    //生成随机时间戳
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const milliseconds = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    const timestamp = `${hours}:${minutes}:${seconds}.${milliseconds}`;

    // 随机选择日志类型和消息
    const logType = logTypes[Math.floor(Math.random() * logTypes.length)];
    const logMessage = logMessages[Math.floor(Math.random() * logMessages.length)];

    // 创建日志行元素
    const line = document.createElement('div');
    line.className = 'terminal-line';

    // 设置样式延迟
    line.style.setProperty('--delay', lineCount);

    // 构建日志行HTML
    line.innerHTML = `
        <span class="timestamp">${timestamp}</span>
        <span class="log-type ${logType.toLowerCase()}">${logType}</span>
        <span class="log-content">${logMessage}</span>
    `;

    // 添加DOM元素
    terminalOutput.appendChild(line);
    lineCount++;

    // 自动滚动到底部
    terminalOutput.scrollTop = terminalOutput.scrollHeight;

    // 限制行数（保持性能）
    while (terminalOutput.children.length > 150) {
        terminalOutput.removeChild(terminalOutput.firstChild);
    }

    // 每5行自动增加一点速度
    if (lineCount % 5 === 0 && scrollSpeed > maxSpeed) {
        scrollSpeed -= 10;
        clearInterval(scrollInterval);
        scrollInterval = setInterval(addTerminalLine, scrollSpeed);
        speedIncreaseCount++;
    }
}

// 启动日志滚动
function startScrolling() {
  if (isScrolling) return;
  
  isScrolling = true;
  scrollInterval = setInterval(() => {
    addTerminalLine();
    // 有10%的几率一次添加两行日志
    if (Math.random() < 0.1) addTerminalLine();
  }, scrollSpeed);
}

// 初始化终端
function initializeTerminal() {
  // 清空终端
  terminalOutput.innerHTML = '';
  
  // 添加初始信息
  const initialLogs = [
    "System Terminal v2.1.5 Started",
    "Initializing Logging Subsystem...",
    "Loading System Configuration Files...",
    "Connecting to Audit Log Database...",
    "Verifying System Integrity Checksums...",
    "Starting Real-time Log Monitoring Thread...",
    "Logging System Initialization Complete, Monitoring System Events"
  ];
  
  initialLogs.forEach((log, index) => {
    setTimeout(() => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      const milliseconds = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
      const timestamp = `${hours}:${minutes}:${seconds}.${milliseconds}`;
      
      const line = document.createElement('div');
      line.className = 'terminal-line';
      line.style.setProperty('--delay', index);
      line.innerHTML = `
        <span class="timestamp">${timestamp}</span>
        <span class="log-type info">INFO</span>
        <span class="log-content">${log}</span>
      `;
      
      terminalOutput.appendChild(line);
      lineCount = index + 1;
      terminalOutput.scrollTop = terminalOutput.scrollHeight;
    }, index * 300);
  });
  
  // 延迟1.5秒后开始自动滚动
  setTimeout(() => {
    startScrolling();
    
    // 5秒后自动加速
    setTimeout(() => {
      if (scrollSpeed > maxSpeed) {
        scrollSpeed = maxSpeed;
        clearInterval(scrollInterval);
        scrollInterval = setInterval(addTerminalLine, scrollSpeed);
        speedIncreaseCount = 5;
      }
    }, 5000);
  }, 1800);
}

// 启动终端
document.addEventListener('DOMContentLoaded', function() {
  initializeTerminal();
});


