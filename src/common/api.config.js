const apiConfig = {
  'project.login': 'POST /api/admin/login',
  // 测试使用路由
  'test.create': 'POST /api/test/create',
  'test.update': 'GET /api/test/:testId',
  'test.list': 'GET /api/test/list',
  'test.delete': 'PUT /api/test/delete/:testId',
};

function getAPIByName(key) {
  const result = apiConfig[key];
  if (!result) {
    throw new Error(`没有找到${key}对应的URL`);
  }
  return result;
}

// eslint-disable-next-line import/prefer-default-export
export { getAPIByName };
