<template>
  <div class="team">
    <div class="container">
      <h2 class="team__title">
        <span v-html="$t('message.Team.title')" />
        <img src="@/assets/images/call.png" :alt="$t('message.fotoAlt')">
      </h2>
      <div class="team__box">
        <div
          v-for="(el, index) in teams"
          :key="index"
          class="team__slug"
        >
          <drag
            :innerid="'team' + index"
          >
            <employee
              :image="el.image"
              :fullName="el.name"
              :info="el.info"
              :current="el.id"
            />
          </drag>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Employee from "@/components/elements/Employee.vue"
import Drag from '@/components/elements/Drag.vue'
import team1 from '@/assets/images/team1.png'
import team2 from '@/assets/images/team2.png'
import team3 from '@/assets/images/team3.png'
import team4 from '@/assets/images/team4.png'
import team5 from '@/assets/images/team5.png'
import team6 from '@/assets/images/team6.png'
import team7 from '@/assets/images/team7.png'
import team8 from '@/assets/images/team8.png'
import team9 from '@/assets/images/team9.png'
import team10 from '@/assets/images/team10.png'
import team11 from '@/assets/images/team11.png'
export default {
  components: {
    Employee,
    Drag
  },
  data () {
    return {
      teams: [
        {
          name: this.$t('message.Team.team1.name'),
          info: this.$t('message.Team.team1.profession'),
          image: team1,
          id: 0
        },
        {
          name: this.$t('message.Team.team2.name'),
          info: this.$t('message.Team.team2.profession'),
          image: team2,
          id: 1
        },
        {
          name: this.$t('message.Team.team3.name'),
          info: this.$t('message.Team.team3.profession'),
          image: team3,
          id: 2
        },
        {
          name: this.$t('message.Team.team4.name'),
          info: this.$t('message.Team.team4.profession'),
          image: team4,
          id: 3
        },
        {
          name: this.$t('message.Team.team5.name'),
          info: this.$t('message.Team.team5.profession'),
          image: team5,
          id: 4
        },
        {
          name: this.$t('message.Team.team6.name'),
          info: this.$t('message.Team.team6.profession'),
          image: team6,
          id: 5
        },
        {
          name: this.$t('message.Team.team7.name'),
          info: this.$t('message.Team.team7.profession'),
          image: team7,
          id: 6
        },
        {
          name: this.$t('message.Team.team8.name'),
          info: this.$t('message.Team.team8.profession'),
          image: team8,
          id: 7
        },
        {
          name: this.$t('message.Team.team9.name'),
          info: this.$t('message.Team.team9.profession'),
          image: team9,
          id: 8
        },
        {
          name: this.$t('message.Team.team10.name'),
          info: this.$t('message.Team.team10.profession'),
          image: team10,
          id: 9
        },
        {
          name: this.$t('message.Team.team11.name'),
          info: this.$t('message.Team.team11.profession'),
          image: team11,
          id: 10
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .team {
    min-height: 100vh;
    @media screen and (max-width: 680px) {
      margin: 80px 0 0;
    }
    &__title {
      color: #fff;
      font-family: Cera Pro;
      font-size: 60px;
      font-weight: 500;
      line-height: 80px;
      letter-spacing: -0.5px;
      img {
        width: 48px;
        height: 48px;
        object-fit: contain;
      }
      @media screen and (max-width: 1023px) {
        font-size: 40px;
        line-height: 60px;
        img {
          width: 30px;
          height: 30px;
          margin: 0 0 0 10px;
          object-fit: contain;
        }
      }
      @media screen and (max-width: 680px) {
        font-size: 24px;
        line-height: 37px;
        img {
          width: 30px;
          height: 30px;
          margin: 0 0 0 10px;
          object-fit: contain;
        }
      }
    }
    &__box {
      display: flex;
      gap: 30px;
      flex-wrap: wrap;
      @media screen and (max-width: 1700px) {
        gap: 29px;
      }
      @media screen and (max-width: 1023px) {
        width: 510px;
        gap: 20px;
        margin: 0 auto;
      }
      @media screen and (max-width: 680px) {
        gap: 20px;
        width: auto;
        margin: 0 auto;
      }
    }
    &__slug {
      width: 510px;
      height: 430px;
      @media screen and (max-width: 1700px) {
        width: calc((80vw - 60px) / 3);
        height: 100%;
      }
      @media screen and (max-width: 1023px) {
        width: 510px;
        height: 430px;
      }
      @media screen and (max-width: 680px) {
        height: 100px;
        width: 100%;
        &:last-child {
          height: 100%;
        }
      }
    }
  }
</style>