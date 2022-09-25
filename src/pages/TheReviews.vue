<template>
  <add-review></add-review>
  <view-review></view-review>
</template>

<script>
import AddReview from '../components/reviews/AddReview.vue';
import ViewReview from '../components/reviews/ViewReviews.vue';
export default {
  components: { AddReview, ViewReview },
};
</script>
