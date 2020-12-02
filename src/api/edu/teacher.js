import request from '@/utils/request'
export default {
    getTeacherListPage(current,limit,teacherQuery) {
        return request({
          //url: '/table/list'+current+"/"+limit,
          url: `/service/edu-teacher/pageTeacherCondition/${current}/${limit}`,
          method: 'post',
          //用RequestBody传输数据要用以下方式
          data: teacherQuery
        })
    }
}