import request from '@/utils/request'

export function createTask(query) {
  return request.post('/api/staff/bpm/task', query)
}

export function getTasks() {
  return request.get('/api/staff/bpm/tasks')
}

export function getBpm() {
  return request.get('/approve_2.bpmn')
}

export function getTaskFormVariables(query) {
  return request.get('/api/staff/bpm/task/form/variables?taskId=' + query)
}

export function completeTask(query) {
  return request.post('/api/staff/bpm/task/complete', query)
}
