<template>
  <div>
    <h1>Contact Me</h1>
  <p>
    <ul>
      <li>Email: {{email}}</li>
      <li>Website: {{web}}</li>
    </ul>
  </p>
  </div>
</template>

<script>
export default {
  name: 'contact',
  data(){
    return {
      email: "Jason.C.Willey@gmail.com",
      web: "https://jasoncwilley.github.io"
    }
  }
}
</script>
