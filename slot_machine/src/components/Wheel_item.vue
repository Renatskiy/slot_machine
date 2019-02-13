<template>
<div>Wheel_item
    {{items}}
</div>
    
</template>
<script>

import {mapGetters} from 'vuex'
export default {

    computed: {
        ...mapGetters('wheel', ['items']),
       
    }
    
}
</script>
