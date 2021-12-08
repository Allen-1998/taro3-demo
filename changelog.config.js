module.exports = {
  disableEmoji: false,
  format: '{type}{scope}: {emoji}{subject}',
  list: ['test', 'feat', 'fix', 'chore', 'docs', 'refactor', 'style', 'ci', 'perf'],
  maxMessageLength: 64,
  minMessageLength: 3,
  questions: ['type', 'scope', 'subject', 'body', 'breaking', 'issues', 'lerna'],
  scopes: [],
  types: {
    chore: {
      description: '构建过程或辅助工具更改',
      emoji: '🤖',
      value: 'chore',
    },
    ci: {
      description: 'CI 相关的改变',
      emoji: '🎡',
      value: 'ci',
    },
    docs: {
      description: '只修改了文档',
      emoji: '✏️',
      value: 'docs',
    },
    feat: {
      description: '一个新功能',
      emoji: '🎸',
      value: 'feat',
    },
    fix: {
      description: '故障修复',
      emoji: '🐛',
      value: 'fix',
    },
    perf: {
      description: '改进性能的代码修改',
      emoji: '⚡️',
      value: 'perf',
    },
    refactor: {
      description: '既不修复故障也不增加新功能的代码修改',
      emoji: '💡',
      value: 'refactor',
    },
    release: {
      description: '创建发布提交',
      emoji: '🏹',
      value: 'release',
    },
    style: {
      description: '仅仅是代码格式/风格的修改',
      emoji: '💄',
      value: 'style',
    },
    test: {
      description: '添加缺失的测试',
      emoji: '💍',
      value: 'test',
    },
  },
}
