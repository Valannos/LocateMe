<script>
export default {
    name: 'town-list',
    props : ['townlist'],
}
</script>


<template>
    
    <table class="table">
        <tbody>
            <tr v-for="town in townlist" :key="town.code">
                {{town.nom}}
            </tr>
        </tbody>
    </table>
    
</template>
