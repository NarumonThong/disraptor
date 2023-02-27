<template>
    <nav aria-label="Page navigation example">
        <ul class="pagination" v-if="getPageItems && getPageItems.length" :style="ulStyles">

          <!-- <jw-pagination v-if="getPageItems.length" :items="getPageItems" @changePage="onPage" >
          </jw-pagination> -->
            <li class="page-item first" :class="{'disabled': page.currentPage === 1}" :style="liStyles">
                <a class="page-link" @click.prevent="onPage(1)" :style="aStyles">{{labels.first}}</a>
            </li>

            <li class="page-item previous" :class="{ disabled: page.currentPage === 1 }" >
                <a  @click.prevent="onPage(page.currentPage - 1)"  class="page-link" :style="aStyles" href="#">«</a>
            </li>

            <li class="page-item page-number" v-for="item in getPageItems" :key="item" :class="{'active': page === item}" :style="liStyles">
                <a @click.prevent="onPage(item)"  class="page-link" :style="aStyles" href="#">{{ item }}</a>
            </li>

            <li class="page-item next"  :class="{'disabled': page.currentPage === page.totalPages}" :style="liStyles">
                <a class="page-link" @click.prevent="onPage(page.currentPage + 1)" :style="aStyles"  href="#">»</a>
            </li>

            <li class="page-item last" :class="{'disabled': page.currentPage === page.totalPages}" :style="liStyles">
              <a class="page-link" @click.prevent="onPage(page.totalPages)" :style="aStyles">{{labels.last}}</a>
            </li>
          
      </ul>

    </nav>
</template>

<script>
import paginate from 'jw-paginate';
    const defaultLabels = {
        first: 'First',
        last: 'Last',
        previous: 'Previous',
        next: 'Next'
    };

    const defaultStyles = {
        ul: {
            margin: 0,
            padding: 0,
            display: 'inline-block'
        },
        li: {
            listStyle: 'none',
            display: 'inline',
            textAlign: 'center'
        },
        a: {
            cursor: 'pointer',
            padding: '6px 12px',
            display: 'block',
            float: 'left'
        }
    };

export default {
  data() {
    return {
      page: [],
      ulStyles: {},
      liStyles: {},
      aStyles: {}
    };
  },
  props: {
    items: {
      required: true
    },
    initialPage: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 10
    },
    maxPages: {
      type: Number,
      default: 10
    },
    labels: {
      type: Object,
      default: () => defaultLabels
    },
    currentPage: {
      type: Number,
      default: 1
    },
    styles: {
      type: Object
    },
    disableDefaultStyles: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    getPageItems() {
      const pages = [];
      if (this.items) {
        if (this.items.limit && this.items.rows) {
          const rows = this.items.rows;
          const limit = this.items.limit;
          for (let index = 1; index <= Math.ceil(rows / limit); index++) {
            pages.push(index);
          }
        }
      }
      return pages;
    },
  },
  created () {
    if (!this.$listeners.onPage) {
      throw 'Missing required event listener: "onPage"';
    }

    // set default styles unless disabled
    if (!this.disableDefaultStyles) {
        this.ulStyles = defaultStyles.ul;
        this.liStyles = defaultStyles.li;
        this.aStyles = defaultStyles.a;
    }

    // merge custom styles with default styles
    if (this.styles) {
        this.ulStyles = { ...this.ulStyles, ...this.styles.ul };
        this.liStyles = { ...this.liStyles, ...this.styles.li };
        this.aStyles = { ...this.aStyles, ...this.styles.a };
    }

    // set page if items array isn't empty
    if (this.items.limit && this.items.rows) {
        this.onPage(this.initialPage);
    }
  },
  methods: {
    onPage(value) {
      
      this.$emit("onPage", value);
      // console.log('AAA: ', getPageItems)
      
      // const { items, pageSize, maxPages } = this;
      // const page = paginate(items.limit, page, pageSize, maxPages);
      // const pageOfItems = Array.from(page.startIndex, page.endIndex + 1);
      // console.log('ZZZ: ', page)
      // // this.getPageItems = getPageItems;
      // this.$emit("onPage", pageOfItems);

    },
  }
};
</script>


