const { withRules } = require('textlint-rule-zh-core')
const {
  getLeftAdjacentNode,
  getRightAdjacentNode,
  getTextContent,
  REGEX_SPACE,
} = require('textlint-util-zh')

function checkSpacing(context, node, helper) {
  const { RuleError, fixer } = context
  const errors = []
  const left = getLeftAdjacentNode(helper, node)
  const right = getRightAdjacentNode(helper, node)

  if (shouldCheck(left)) {
    const char = getTextContent(left).slice(-1)
    if (needsSpace(char)) {
      errors.push(new RuleError('行内元素两侧需要添加空格', {
        index: 0,
        fix: fixer.insertTextBefore(node, ' '),
      }))
    }
  }

  if (shouldCheck(right)) {
    const char = getTextContent(right)[0]
    if (needsSpace(char)) {
      errors.push(new RuleError('行内元素两侧需要添加空格', {
        index: node.range[1] - node.range[0] - 1,
        fix: fixer.insertTextAfter(node, ' '),
      }))
    }
  }

  return errors
}

const rule = {
  type: 'node',
  Code: checkSpacing,
  Link: checkSpacing,
}

function shouldCheck(node) {
  return node && ['Str', 'Delete', 'Emphasis', 'Strong', 'Link', 'Code'].includes(node.type)
}

function needsSpace(char) {
  return char && char !== '\n' && !REGEX_SPACE.test(char)
}

module.exports = withRules([rule])
