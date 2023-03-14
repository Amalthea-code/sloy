<template>
  <div class="projects">
    <div class="container">
      <h2 class="projects__title">
        <span v-html="$t('message.Projects.title')" />
      </h2>
      <div class="projects__box">
        <div
          class="projects__slug"
          v-for="(el, index) in projects"
          :key="index"
        >
          <Drag :innerid="'project' + index">
            <sloy-project
              :image="el.image"
              :title="el.title"
              :text="el.text"
              :link="el.link"
            />
          </Drag>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import projects1 from '@/assets/images/projects1.jpg'
import projects2 from '@/assets/images/projects2.jpg'
import projects3 from '@/assets/images/projects3.jpg'
import projects4 from '@/assets/images/projects4.jpg'
import projects5 from '@/assets/images/projects5.jpg'
import projects6 from '@/assets/images/projects6.jpg'
import projects7 from '@/assets/images/projects7.jpg'
import projects8 from '@/assets/images/projects8.jpg'
import SloyProject from '@/components/modules/SloyProject.vue'
import Drag from '@/components/elements/Drag.vue'
export default {
  components: {
    SloyProject,
    Drag
  },
  data () {
    return {
      projects: [
        {
          title: 'Заголовок',
          image: projects1,
          text: 'Тут текст про визуальный код и все прочее. Очень клевый короткий и читаемый. Вот как то так. А вообще расскажи как дела твои? Будет здорово если сас не будет',
          link: 'https://randomfox.ca/images/1.jpg'
        },
        {
          title: 'Заголовок',
          image: projects2,
          text: 'Тут текст про визуальный код и все прочее. Очень клевый короткий и читаемый. Вот как то так. А вообще расскажи как дела твои? Будет здорово если сас не будет',
          link: 'https://randomfox.ca/images/1.jpg'
        },
        {
          title: 'Заголовок',
          image: projects3,
          text: 'Тут текст про визуальный код и все прочее. Очень клевый короткий и читаемый. Вот как то так. А вообще расскажи как дела твои? Будет здорово если сас не будет',
          link: 'https://randomfox.ca/images/1.jpg'
        },
        {
          title: 'Заголовок',
          image: projects4,
          text: 'Тут текст про визуальный код и все прочее. Очень клевый короткий и читаемый. Вот как то так. А вообще расскажи как дела твои? Будет здорово если сас не будет',
          link: 'https://randomfox.ca/images/1.jpg'
        },
        {
          title: 'Заголовок',
          image: projects5,
          text: 'Тут текст про визуальный код и все прочее. Очень клевый короткий и читаемый. Вот как то так. А вообще расскажи как дела твои? Будет здорово если сас не будет',
          link: 'https://randomfox.ca/images/1.jpg'
        },
        {
          title: 'Заголовок',
          image: projects6,
          text: 'Тут текст про визуальный код и все прочее. Очень клевый короткий и читаемый. Вот как то так. А вообще расскажи как дела твои? Будет здорово если сас не будет',
          link: 'https://randomfox.ca/images/1.jpg'
        },
        {
          title: 'Заголовок',
          image: projects7,
          text: 'Тут текст про визуальный код и все прочее. Очень клевый короткий и читаемый. Вот как то так. А вообще расскажи как дела твои? Будет здорово если сас не будет',
          link: 'https://randomfox.ca/images/1.jpg'
        },
        {
          title: 'Заголовок',
          image: projects8,
          text: 'Тут текст про визуальный код и все прочее. Очень клевый короткий и читаемый. Вот как то так. А вообще расскажи как дела твои? Будет здорово если сас не будет',
          link: 'https://randomfox.ca/images/1.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .projects {
    min-height: 100vh;
    &__title {
      font-family: Cera Pro;
      font-size: 60px;
      font-weight: 500;
      line-height: 80px;
      letter-spacing: -0.5px;
      color: #fff;
      @media screen and (max-width: 1023px) {
        font-size: 40px;
        line-height: 60px;
      }
      @media screen and (max-width: 680px) {
        font-size: 24px;
        line-height: 37px;
      }
    }
    &__slug {
      width: 370px;
      height: 430px;
      margin: 36px 0 0;
      &:nth-child(2n) {
        margin: 72px 0 0;
        @media screen and (max-width: 1023px) {
          margin: 0;
        }
      }
      @media screen and (max-width: 1700px) {
        width: 270px;
        height: 330px;
      }
      @media screen and (max-width: 1400px) {
        width: 370px;
        height: 430px;
      }
      @media screen and (max-width: 1023px) {
        width: calc(50% - 5px);
        height: auto;
        margin: 0;
      }
      @media screen and (max-width: 500px) {
        width: 100%;
        height: auto;
      }
    }
    &__box {
      margin: 40px 0 0;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 0 40px;
      @media screen and (max-width: 1700px) {
        gap: 0 10px;
      }
      @media screen and (max-width: 1023px) {
        width: 100%;
        margin: 20px 0 0;
        gap: 10px;
      }
    }
  }
  .container {
    width: calc(100% - 20px);
  }
</style>