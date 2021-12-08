module.exports = {
  disableEmoji: false,
  format: '{type}{scope}: {emoji}{subject}',
  list: ['feat', 'fix', 'test', 'docs', 'style', 'ci', 'perf', 'refactor', 'chore'],
  maxMessageLength: 64,
  minMessageLength: 3,
  // questions: ['type', 'scope', 'subject', 'body', 'breaking', 'issues', 'lerna'],
  questions: ['type', 'scope', 'subject', 'body', 'breaking', 'lerna'],
  scopes: [],
  types: {
    feat: {
      description: '新功能',
      emoji: '✨',
      value: 'feat',
    },
    fix: {
      description: '故障修复',
      emoji: '🐛',
      value: 'fix',
    },
    test: {
      description: '测试',
      emoji: '✅',
      value: 'test',
    },
    docs: {
      description: '文档',
      emoji: '✏️ ',
      value: 'docs',
    },
    style: {
      description: '风格',
      emoji: '💄',
      value: 'style',
    },
    ci: {
      description: 'CI 配置',
      emoji: '👷',
      value: 'ci',
    },
    perf: {
      description: '性能优化',
      emoji: '⚡️',
      value: 'perf',
    },
    refactor: {
      description: '代码重构',
      emoji: '♻️',
      value: 'refactor',
    },
    chore: {
      description: '构建/工程依赖/工具',
      emoji: '🚀',
      value: 'chore',
    },
    release: {
      description: '发布',
      emoji: '🏹',
      value: 'release',
    },
  },
}
