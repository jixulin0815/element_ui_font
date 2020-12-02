<template>
    <div class="app-conrainer">
        讲师列表
    </div>
</template>


<script>
import teacher from '@/api/edu/teacher/';

export default {
    // data:{

    // },
    data (){
        return {
            list:null,
            page:1,
            limit:10,
            total:0,
            teacherQuery:{}
        }
    },
    created (){

    },
    methods:{

    }
}
</script>