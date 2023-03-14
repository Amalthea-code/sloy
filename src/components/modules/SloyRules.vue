<template>
    <Drag class="sloyRules" innerid="rules">
      <Modal>
        <template v-slot:title>
          Напоминания
        </template>
        <template v-slot:box>
          <div class="rules">
            <div class="rules__title"><span>Наши правила</span><span>{{ rulesList.length }}</span></div>
            <div class="rules__box">
              <div
                v-for="(el, index) in rulesList"
                :key="index"
                class="rules__element"
              >
                <input type="checkbox" class="rules__element-checkbox" @click="switchLine(el.id)">
                <input
                  type="text"
                  :class="{
                    'rules__element-text': true,
                    'rules__element-text_line': el.line
                  }"
                  @keydown.delete="deleteHendler(el.id)"
                  v-model="rulesList[index].text">
              </div>
              <button class="rules__button" @click="addRules" />
            </div>
          </div>
        </template>
      </Modal>
    </Drag>
</template>

<script>
  import Drag from '@/components/elements/Drag.vue'
  import Modal from '@/components/elements/Modal.vue'
  import logo from '@/assets/images/icons/logo.vue'
  export default {
    components: {
      Drag,
      Modal,
      logo
    },
    data () {
      return {
        rulesList: [
          {
            text: this.$t("message.SloyRules.rule1"),
            id: 0,
            line: false
          },
          {
            text: this.$t("message.SloyRules.rule2"),
            id: 1,
            line: false
          },
          {
            text: this.$t("message.SloyRules.rule3"),
            id: 2,
            line: false
          },
          {
            text: this.$t("message.SloyRules.rule4"),
            id: 3,
            line: false
          },
          {
            text: this.$t("message.SloyRules.rule5"),
            id: 4,
            line: false
          },
          {
            text: this.$t("message.SloyRules.rule6"),
            id: 5,
            line: false
          },
          {
            text:  this.$t("message.SloyRules.rule7"),
            id: 6,
            line: false
          }
        ]
      }
    },
    methods: {
      addRules () {
        this.rulesList.push({
          text: '',
          id: (this.rulesList[this.rulesList.length - 1].id + 1)
        })
      },
      switchLine (index) {
        this.rulesList[index].line = !this.rulesList[index].line
      },
      deleteHendler (props) {
        console.log(this.rulesList[props].text === '')
        if (this.rulesList[props].text === '') {
          this.rulesList.splice(props, 1)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .rules {
    width: 320px;
    user-select: none;
    padding: 20px;
    filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.3));
    @media screen and (max-width: 680px) {
      width: calc(100vw - 20px);
      box-sizing: border-box;
    }
    &__title {
      display: flex;
      justify-content: space-between;
      font-family: Cera Pro;
      font-size: 24px;
      font-weight: 500;
      line-height: 22px;
      letter-spacing: -0.5px;
      color: #397af6;
    }
    &__button {
      border-radius: 50%;
      width: 38px;
      height: 38px;
      background-color: #007AFF;
      position: absolute;
      bottom: 18px;
      right: 34px;
      z-index: 1;
      border: none;
      cursor: pointer;
      &::before {
        width: 16px;
        height: 2px;
        background-color: #fff;
        border-radius: 1px;
        content: '';
        z-index: 2;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      &::after {
        width: 16px;
        height: 2px;
        background-color: #fff;
        border-radius: 1px;
        content: '';
        z-index: 2;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(90deg);
      }
    }
    &__element {
      border-bottom: 1px solid #121212;
      padding: 10px 0;
      display: flex;
      align-items: center;
      &-checkbox {
        width: 0;
        height: 20px;
        position: relative;
        &:checked::before {
          opacity: 1;
          position: absolute;
          top: 5px;
          left: 5px;
          width: 8px;
          height: 8px;
          content: '';
          cursor: pointer;
          border-radius: 50%;
          background-color: #fff;
        }
        &::after {
          opacity: 1;
          position: absolute;
          top: 0;
          left: 0;
          width: 16px;
          height: 16px;
          border: 1px #fff solid;
          content: '';
          cursor: pointer;
          border-radius: 50%;
        }
      }
      &-text {
        padding: 0 0 0 30px;
        font-family: Cera Pro;
        font-size: 16px;
        line-height: 26px;
        letter-spacing: -0.5px;
        color: #fff;
        background-color: transparent;
        border: none;
        width: 100%;
        &_line {
          text-decoration: line-through;
        }
      }
    }
  }
  .sloyRules {
    margin: 20px 0 0;
    @media screen and (max-width: 1023px) {
      margin: 40px 0 0 calc(90% - 320px);
    }
    @media screen and (max-width: 680px) {
      margin: 20px 0 0;
    }
  }
</style>