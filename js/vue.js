const app = Vue.createApp({
  data() {
    return {
      stories: [
        {
          by: "0",
          media: "https://images.unsplash.com/photo-1617440169032-c3582e03efc0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
          text: "blabla blabla blabla blabla blabla blabla blabla blabla"
        },
        {
          by: "1",
          media: "https://images.unsplash.com/photo-1617419086540-518c5b847b88?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
          text: "test test test test test test test test test test"
        }
      ],
      posts: [
        {
          id: 0,
          date: '2021-4-6',
          username: "Eslam Magdy",
          userProfile: "http://www.google.com",
          profilePic: "https://images.unsplash.com/photo-1617464629317-512a99e7872f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
          textType: "en",
          text: `bla bla bla`,
          mediaType: "img",
          mediaCount: 1,
          media: ["https://images.unsplash.com/photo-1611095788646-86737a001141?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"],
          likes: 500,
          liked: true,
          comments: 200,
          viewComments: true,
          commentsContent: [
            {
              id: 0,
              username: "test",
              userProfile: "http://www.google.com",
              profilePic: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80",
              content: "bla blabla blabla"
            }
          ],
          shares: 7,
          saved: false,
        },
        {
          id: 1,
          username: "Eslam Magdy",
          profilePic: "https://images.unsplash.com/photo-1617464629317-512a99e7872f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
          media: "https://images.unsplash.com/photo-1611095788646-86737a001141?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
          text: "bla bla bla",
          likes: 500,
          comments: 200,
          shares: 7,
          saved: false
        }
      ]
    }
  }
})

app.component('story-component', {
  props: [
    'by',
    'media',
    'text',
  ],
  template: `
    <div
      class="story"
      data-toggle="modal"
      :data-target="'#showStoryModal-'+by"
    >
      <img
        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
      />
    </div>
    <div class="show-story-modal">
      <div
        class="modal fade"
        :id="'showStoryModal-'+by"
        tabindex="-1"
        aria-hidden="true"
      >
        <div class="modal-dialog" style="margin-top: 6vh">
          <div class="modal-content">
            <div class="modal-header d-flex justify-content-between">
              <button
                type="button"
                class="close ml-0"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="story-content">
                <img class="w-100 h-100" :src="media" />
                <p class="m-auto text-center w-100 p-2">{{text}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})

app.component('comment-component', {
  props: ['data'],
  data() {
    return {
      comment: this.data
    }
  },
  methods: {
    toggleCommentOptions(id) {
      if ($('.comment-options-' + id).css('display') == 'block') $('.comment-options-' + id).css('display', 'none')
      else $('.comment-options-' + id).css('display', 'block')
    }
  },
  template: `
    <div class="comment d-flex justify-content-between">
      <div class="comment-owner d-flex align-items-center p-2">
        <div class="owner-img">
          <img
            :src="comment.profilePic"
            class="rounded-circle"
          />
        </div>
        <div class="owner-name pl-3">
          <a :href="comment.userProfile" class="mb-0"><b>{{comment.username}}</b></a>
          <p class="comment-content mb-0">{{comment.content}}</p>
        </div>
      </div>
      <div class="comment-options" :class="'comment-options-'+comment.id">
        <ul class="options">
          <li>Report This Comment</li>
        </ul>
      </div>
      <div @click="toggleCommentOptions(comment.id)" class="comment-option ml-auto pr-3">
        <i class="fas fa-ellipsis-v"></i>
      </div>
    </div>
    <hr class="m-0" />
  `
})

app.component('post-component', {
  props: ['data'],
  data() {
    return {
      post: this.data
    }
  },
  methods: {
    toggleOptions(id) {
      if ($('.post-options-' + id).css('display') == 'block') $('.post-options-' + id).css('display', 'none')
      else $('.post-options-' + id).css('display', 'block')
    },
    toggleSave(id) {
      if (this.post.saved) this.post.saved = false
      else this.post.saved = true
    },
    toggleLikePost(id) {
      if (this.post.liked) this.post.liked = false
      else this.post.liked = true
    },
    toggleComments() {
      if (this.post.viewComments) this.post.viewComments = false
      else this.post.viewComments = true
    },
    deletePost(id) { $('#post-' + id).css('display', 'none') },
  },
  template: `
    <div class="post-container bg-white mt-3 p-3" :id="'post-'+post.id">
      <div class="post-owner d-flex align-items-center">
        <div class="owner-img">
          <img
            :src="post.profilePic"
            class="rounded-circle"
          />
        </div>
        <div class="owner-name pl-3">
          <a :href="post.userProfile"><b>{{post.username}}</b></a><br>
          <span>{{post.date}}</span>
        </div>
        <!-- Post options -->
        <div class="post-options" :class="'post-options-'+post.id">
          <ul class="options">
            <li data-toggle="modal" :data-target="'#advertiseModal-'+post.id">Advertise</li>
            <li @click="toggleSave(post.id)" v-if="post.saved == false">Save Post</li>
            <li @click="toggleSave(post.id)" v-else>Saved</li>
            <li data-toggle="modal" :data-target="'#edit-post-modal-'+post.id">Edit</li>
            <li data-toggle="modal" :data-target="'#delete-post-modal-'+post.id" class="last-li">Delete</li>
          </ul>
        </div>
        <div class="post-option ml-auto pr-3" @click="toggleOptions(post.id)">
          <i class="fas fa-ellipsis-v"></i>
        </div>
      </div>
      <div class="post-desc mt-3">
        <pre v-if="post.textType == 'ar'" style="text-align:right;">{{post.text}}</pre>
        <pre v-else style="text-align:left;">{{post.text}}</pre>
        <div class="media">
          <img
            v-if="post.mediaType == 'img' && post.mediaCount == 1"
            :src="post.media"
            alt="opel car"
          />
          <video v-if="post.mediaType == 'video' && post.mediaCount == 1" controls>
            <source src="mov_bbb.mp4" type="video/mp4">
            Your browser does not support HTML video.
          </video>
        </div>
      </div>
      <div class="post-statistics mt-3 d-flex">
        <div class="likes">
          <div v-if="post.liked">
            <i @click="toggleLikePost(post.id)" class="fas fa-thumbs-up"></i> <span> {{post.likes}}</span>
          </div>
          <div v-else>
            <i @click="toggleLikePost(post.id)" class="far fa-thumbs-up"></i> <span> {{post.likes}}</span>
          </div>
        </div>
        <div @click="toggleComments" class="comments">
          <i class="far fa-comment ml-3"></i> <span> {{post.comments}}</span>
        </div>
        <div class="shares">
          <i class="fas fa-share ml-3"></i> <span> {{post.shares}}</span>
        </div>
      </div>
      <div v-if="post.viewComments == true" class="post-comment-list mt-2">
        <div class="hide-commnet-list d-flex flex-row-reverse">
          <span @click="toggleComments"><i class="fas fa-chevron-up"></i> Hide</span>
        </div>
        <comment-component
          v-for="comment in post.commentsContent"
          :data="comment">
        </comment-component>
      </div>
        <div class="add-commnet mt-2">
          <input
            class="w-100 pl-2"
            type="text"
            name="comment"
            placeholder="Add Your Commnet"
          />
        </div>
      <div class="post-advertise-modal">
        <div
          class="modal fade"
          :id="'advertiseModal-'+post.id"
          tabindex="-1"
          aria-hidden="true"
        >
          <div class="modal-dialog" style="margin-top: 10vh">
            <div class="modal-content">
              <div class="modal-header d-flex justify-content-between">
                <span></span>
                <h5 class="modal-title" id="exampleModalLabel">
                  Advertise Post
                </h5>
                <button
                  type="button"
                  class="close ml-0"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form action="" class="container">
                  <p>Select Duration:</p>
                  <div class="form-group form-check">
                    <input
                      type="radio"
                      name="duration"
                      class="form-check-input"
                      id="exampleCheck1"
                    />
                    <label class="form-check-label" for="exampleCheck1"
                      >3 days</label
                    >
                  </div>
                  <div class="form-group form-check">
                    <input
                      type="radio"
                      name="duration"
                      class="form-check-input"
                      id="exampleCheck1"
                    />
                    <label class="form-check-label" for="exampleCheck1"
                      >5 days</label
                    >
                  </div>
                  <div class="form-group form-check">
                    <input
                      type="radio"
                      name="duration"
                      class="form-check-input"
                      id="exampleCheck1"
                    />
                    <label class="form-check-label" for="exampleCheck1"
                      >7 days</label
                    >
                  </div>
                  <p>Select Audience:</p>
                  <div class="form-group form-check">
                    <input
                      type="radio"
                      name="audience"
                      class="form-check-input"
                      id="exampleCheck1"
                    />
                    <label class="form-check-label" for="exampleCheck1"
                      >From 100 To 1000</label
                    >
                  </div>
                  <div class="form-group form-check">
                    <input
                      type="radio"
                      name="audience"
                      class="form-check-input"
                      id="exampleCheck1"
                    />
                    <label class="form-check-label" for="exampleCheck1"
                      >From 1000 To 2000</label
                    >
                  </div>
                  <div class="form-group form-check">
                    <input
                      type="radio"
                      name="audience"
                      class="form-check-input"
                      id="exampleCheck1"
                    />
                    <label class="form-check-label" for="exampleCheck1"
                      >From 2000 To 5000</label
                    >
                  </div>
                  <div
                    class="form-group d-flex justify-content-between"
                  >
                    <label for="exampleInputEmail1"
                      >Target Audience:</label
                    >
                    <select name="target-audience">
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                  <div
                    class="form-group d-flex justify-content-between"
                  >
                    <label for="exampleInputEmail1">Target Age:</label>
                    <select name="target-age">
                      <option value="male">From 20 To 30</option>
                      <option value="female">From 30 To 40</option>
                    </select>
                  </div>
                  <div
                    class="form-group d-flex justify-content-between"
                  >
                    <label for="exampleInputEmail1"
                      >Target Countery:</label
                    >
                    <select name="target-countery">
                      <option value="male">Egypt</option>
                      <option value="female">Saudia</option>
                    </select>
                  </div>
                  <div
                    class="form-group d-flex justify-content-between"
                  >
                    <label for="exampleInputEmail1">Target City:</label>
                    <select name="target-countery">
                      <option value="male">Alex</option>
                      <option value="female">Cairo</option>
                    </select>
                  </div>
                  <input type="hidden" name="postId" :value="post.id">
                  <button type="submit" class="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="post-edit-modal">
        <div
          class="modal fade"
          :id="'edit-post-modal-'+post.id"
          tabindex="-1"
          aria-hidden="true"
        >
          <div class="modal-dialog" style="margin-top: 22vh">
            <div class="modal-content">
              <div class="modal-header d-flex justify-content-between">
                <span></span>
                <h5 class="modal-title" id="exampleModalLabel">Edit Post</h5>
                <button
                  type="button"
                  class="close ml-0"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form
                  action=""
                  class="container"
                  enctype="multipart/form-data"
                >
                  <!-- Select Post Type -->
                  <div
                    class="post-type d-flex justify-content-between align-items-center m-auto w-75"
                  >
                    <div>Post As:</div>
                    <div class="d-flex align-items-center">
                      <input
                        type="radio"
                        name="post-type"
                        value="post"
                        id="post"
                      />
                      <span class="pl-2">Post</span>
                    </div>
                    <div class="d-flex align-items-center">
                      <input
                        class="m-0"
                        type="radio"
                        name="post-type"
                        value="service"
                        id="service"
                      />
                      <span class="pl-2">Service</span>
                    </div>
                  </div>
                  <!-- Select post Privacy -->
                  <div
                    class="post-privacy d-flex justify-content-between align-items-center m-auto w-75"
                  >
                    <label for="cars">Choose Post Privacy:</label>
                    <select id="post-privacy" name="privacy">
                      <option value="volvo">Volvo</option>
                      <option value="saab">Saab</option>
                      <option value="fiat">Fiat</option>
                      <option value="audi">Audi</option>
                    </select>
                  </div>
                  <!-- Select post Category -->
                  <div
                    class="post-category d-flex justify-content-between align-items-center m-auto w-75"
                  >
                    <label for="cars">Choose A Category:</label>
                    <select id="post-category" name="category">
                      <option value="volvo">Volvo</option>
                      <option value="saab">Saab</option>
                      <option value="fiat">Fiat</option>
                      <option value="audi">Audi</option>
                    </select>
                  </div>
                  <!-- Post Desc -->
                  <div class="post-desc d-flex justify-content-center mt-2">
                    <textarea
                      class="w-75"
                      name="post-text"
                      id="post-text"
                      cols="200"
                      rows="4"
                      placeholder="Start Typing..."
                      :value="post.text"
                    ></textarea>
                  </div>
                  <!-- Post Images -->
                  <div class="post-desc d-flex justify-content-center mt-2">
                    <input
                      class="form-control w-75 mt-2"
                      type="file"
                      name="imgs"
                      id="imgs"
                      accept="image/*"
                      multiple
                    />
                  </div>
                  <!-- Add Post Btn -->
                  <div
                    class="post-add-btn d-flex justify-content-center mt-4"
                  >
                    <button
                      type="button"
                      class="btn btn-secondary btn-block w-75"
                      data-dismiss="modal"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="post-delete-modal">
        <div
          class="modal fade"
          :id="'delete-post-modal-'+post.id"
          tabindex="-1"
          aria-hidden="true"
        >
          <div class="modal-dialog" style="margin-top: 22vh">
            <div class="modal-content">
              <div class="modal-header d-flex justify-content-between">
                <h5 class="modal-title" id="exampleModalLabel">Confirm Delete Post</h5>
                <button
                  type="button"
                  class="close ml-0"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <button
                  type="button"
                  class="btn btn-secondary btn-block w-100"
                  data-dismiss="modal"
                  @click="deletePost(post.id)">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})

app.mount('#app')