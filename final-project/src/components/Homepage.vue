<template>
<div>
      <div class="container">

    <ul>
  <li v-for="tutor in tutors" v-bind:key="tutor">
    {{ tutor.tutor}}
  </li>
</ul>
</div>
</div>
</template>

<script>
export default {
    name: "Homepage",
    data () {
        return {
            tutors:[
                {tutor:"Chris"},{tutor:"Tyler"},{tutor:"Samantha"},{tutor:"Ian"},{tutor:"Sherrie"}]
        }
    }
}
</script>
