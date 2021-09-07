export const roleOptions = [
  {
    value: 'ROLE_ADMIN',
    label: '超级管理员'
  }, {
    value: 'ROLE_MANAGER',
    label: '管理员'
  }, {
    value: 'ROLE_USER',
    label: '普通用户'
  }
]

export function formatAuthorities(val) {
  return val.map(item => {
    for (const option of roleOptions) {
      if (option.value === item) {
        return option.label
      }
    }
    return item
  }).join(',')
}

export const LOGIN_VALID_CHARACTER = {
  pattern: /^[a-zA-Z0-9_'.@]{4,50}$/,
  message: `英文大小写,数字,以及 _'.@,长度4-50`
}
