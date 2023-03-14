<template>
  <Drag class="sloyChat" innerid="chat">
    <Modal>
      <template v-slot:title>
        Напишите нам
      </template>
      <template v-slot:box>
        <div class="chat"> 
          <div class="chat__number">
            От:
            <input v-model="inputValue" ref="numberInput" type="text" class="chat__number-input">
          </div>
          <chat-box :messages="messages" />
          <chat-controllers
            ref="chatControllers"
            @create-message="createMessage"
            @focus-attempt="focusAttempt"
          />
        </div>
      </template>
    </Modal>
  </Drag>
</template>

<script>
  import Drag from '@/components/elements/Drag.vue'
  import Modal from '@/components/elements/Modal.vue'
  import ChatBox from '@/components/chat/ChatBox.vue'
  import ChatControllers from '@/components/chat/ChatControllers.vue'
  import chat1 from '@/assets/images/chat1.png'
  import chat2 from '@/assets/images/chat2.png'
  import chat3 from '@/assets/images/chat3.png'
  
  export default {
    components: {
      Modal,
      Drag,
      ChatBox,
      ChatControllers
    },
    data () {
      return {
        messages: [
          {
            position: false,
            message: 'Мы тебя уже заждались! Рассказывай ',
            imageURL: chat1
          }
        ],
        inputValue: '',
        counter: 0,
        expectedCounter: 0
      }
    },
    methods: {
      createMessage (props) {
        if (props.message === '' && props.imageURL === '') {
          this.messages.push({
            message: (this.counter ? 'X' + this.counter : '') + ' Хоть бы картинку прикрепил',
            imageURL: '',
            position: false
          })
          this.counter++
        } else if (props.message === '') {
          this.messages.push({
            message: 'Оставь подпись к фото)',
            imageURL: '',
            position: false
          })
        } else if (!this.inputValue) {
          this.messages.push({
            message: 'Оcталось только номер телефона указать',
            position: false,
            images: ''
          })
          this.$refs.numberInput.focus()
        } else {
          this.messages.push({
            message: props.message,
            imageURL: props.imageURL,
            position: true
          })
          this.fetchMessage(props)
          this.$refs.chatControllers.imageURL = ''
          this.$refs.chatControllers.inputValue = ''
        }
      },
      focusAttempt () {
        if (!this.inputValue) {
          this.messages.push({
            message: 'Оставь номер телефона что бы мы могли ответить тебе))',
            position: false,
            images: ''
          })
          this.$refs.numberInput.focus()
        }
      },
      fetchMessage (props) {
        if (props.image) {
          const formData = new FormData()
          formData.append('image', props.image)
          fetch('https://api.imgbb.com/1/upload?expiration=60&key=c4ffeecf0c487ba0ff459d557e209beb',{
            method: 'POST',
            ContentType: 'multipart/form-data',
            body: formData
          }).then((response)=> {
            return response.json()
          }).then((data) => {
            fetch('https://api.telegram.org/ЗДЕСЬ_ДОЛЖЕН_БЫТЬ_APIKEY/sendPhoto?chat_id=ЗДЕСЬ_ДОЛЖЕН_БЫТЬ_ID&photo=' + data.data.delete_url, {
              method: 'POST'
            }).then((response)=> {
              return response.json()
            }).then(()=> {
              fetch('https://api.telegram.org/ЗДЕСЬ_ДОЛЖЕН_БЫТЬ_APIKEY/sendMessage?chat_id=ЗДЕСЬ_ДОЛЖЕН_БЫТЬ_ID&text=Номер пользователя: ' + this.inputValue + ' Сообщение с фото: ' + props.message )
            })
          })
        } else {
          fetch('https://api.telegram.org/ЗДЕСЬ_ДОЛЖЕН_БЫТЬ_APIKEY/sendMessage?chat_id=ЗДЕСЬ_ДОЛЖЕН_БЫТЬ_ID&text=Номер пользователя: ' + this.inputValue + ' Сообщение: ' + props.message )
        }
      },
      expectedMessages () {
        switch (this.expectedCounter) {
          case 0:
            this.messages.push({
              message: 'Грустно, когда ты не пишешь',
              imageURL: chat2,
              position: false
            })
            this.expectedCounter++
            break
          case 1:
            this.messages.push({
              message: 'Ладно-ладно, можем созвониться. Просто номер оставь))',
              imageURL: '',
              position: false
            })
            this.expectedCounter++
            break
          case 2:
            this.messages.push({
              message: 'Мы пока порисуем логотипы, а ты погуляй по сайту ',
              imageURL: chat3,
              position: false
            })
            this.expectedCounter++
            break
          case 3:
            this.messages.push({
              message: 'Пум... пум... пум...',
              imageURL: '',
              position: false
            })
            clearInterval(this.messageInterval)
            break
        }
      }  
    },
    mounted () {
      this.messageInterval = setInterval(this.expectedMessages, 60000)
    },
    unmounted () {
      clearInterval(this.messageInterval)
    }
  }
</script>

<style lang="scss" scoped>
  .chat {
    width: 370px;
    height: 364px;
    box-sizing: border-box;
    padding: 0 20px;
    @media screen and (max-width: 680px) {
      width: calc(100vw - 20px);
    }
    &__number {
      font-family: Cera Pro;
      font-size: 15px;
      line-height: 18px;
      color: #EBEBF560;
      padding: 12px 0 8px;
      border-bottom: 1px solid #59595C;
      display: flex;
      align-items: center;

      &-input {
        background-color: transparent;
        color: #fff;
        border: none;
        font-family: Cera Pro;
        font-size: 15px;
        line-height: 18px;
        padding: 2px 0 2px 8px;
      }
    }
  }
  .sloyChat {
    @media screen and (max-width: 1023px) {
      margin: 60px 0 20px 10vw;
    }
    @media screen and (max-width: 680px) {
      width: 100%;
      margin: 0 0 20px;
    }
  }
</style>