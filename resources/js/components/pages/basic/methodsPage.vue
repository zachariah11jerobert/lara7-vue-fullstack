<template>
  <div>
    <h1>The number is : {{ views }}</h1>
    <button @click="updateCounter(1)">Increase</button>
    <button @click="updateCounter(-1)">Decrese</button>

    <hr />

    <div v-for="(blog, i) in blogs" :key="i" v-if="blogs.length">
      <h1>{{ blog.title }}</h1>
      <p>{{ blog.post }}</p>
    </div>

    <hr />
    <div>
      <h1 v-if="showItem">show this item if "showItem" is true</h1>
      <h1 v-if="!showItem">show this item if "showItem" is false</h1>
    </div>

    <button @click="changeShowItem">Change showItem</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      views: 0,
      blogs: [],
      showItem: false,
    };
  },
  methods: {
    updateCounter(number) {
      this.views += number;
    },
    changeShowItem(){
        this.showItem = !this.showItem
    }
  },
  created() {
    this.views = 100;

    let posts = [
      { title: "this is blog title", post: "this is blog post 1", id: 1 },
      { title: "this is blog title", post: "this is blog post 2", id: 2 },
      { title: "this is blog title", post: "this is blog post 3", id: 3 },
      { title: "this is blog title", post: "this is blog post 4", id: 4 },
    ];

    this.blogs = posts;
  },
};
</script>