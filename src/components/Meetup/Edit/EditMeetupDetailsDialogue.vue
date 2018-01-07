<template>
    <v-dialog width="350px" persistent v-model="editDialogue">
      <v-btn fab dark class="accent" slot="activator">
        <v-icon>edit</v-icon>
      </v-btn>
      <v-card>
        <v-container>
          <v-layout row wrap>
            <v-flex xs12>
              <v-card-title><h4>Edit Meetup</h4></v-card-title>
            </v-flex>
          </v-layout>
          <v-divider></v-divider>
          <v-layout row wrap>
            <v-flex xs12>
              <v-card-text>
                <v-text-field
                  name="title"
                  label="Title"
                  id="title"
                  v-model="editedTitle"
                  required></v-text-field>
                <v-text-field
                name="description"
                label="Description"
                id="description"
                v-model="editedDescription"
                multi-line
                required></v-text-field>
              </v-card-text>
            </v-flex>
          </v-layout>
          <v-divider></v-divider>
          <v-layout row wrap>
            <v-flex xs12>
              <v-card-actions>
                <v-btn flat class="error--text" @click="onDiscard">Discard</v-btn>
                <v-btn flat class="info--text" @click="onSaveChanges">Save Changes</v-btn>
              </v-card-actions>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-dialog>
</template>

<script>
  export default {
    props: ['meetup'],
    data () {
      return {
        editedTitle: this.meetup.title,
        editedDescription: this.meetup.description,
        editDialogue: false
      }
    },
    methods: {
      onDiscard () {
        this.editDialogue = false
        this.editedTitle = this.meetup.title
        this.editedDescription = this.meetup.description
      },
      onSaveChanges () {
        if (this.editedTitle.trim() === '' || this.editedDescription.trim() === '') {
          return
        }
        this.editDialogue = false
        this.$store.dispatch('updateMeetupData', {
          id: this.meetup.id,
          title: this.editedTitle,
          description: this.editedDescription
        })
      }
    }
  }
</script>
