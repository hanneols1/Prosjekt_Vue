<template>
  <table class="table">
    <thead class="table__header">
      <tr class="table__list">
        <td class="table__item">
          <button class="table__click" @click="sortBy('name')">Business</button>
        </td>

        <td class="table__item">
          <button @click="sortBy('year')">Start-up period</button>
        </td>

        <td class="table__item">
          <button @click="sortBy('owner')">CEO</button>
        </td>

        <td class="table__item">
          <button @click="sortBy('city')">Place</button>
        </td>
      </tr>
    </thead>

    <tbody class="table__value">
      <tr v-for="row in naturalSort">
        <td v-for="value in row">
          {{ value }}
        </td>
      </tr>
    </tbody>

    <br />
    <br />
  </table>
  <button class="table__controller" @click="toggleSortOrder">
    Sort: {{ sort.key }} ({{ sort.order.toUpperCase() }})
  </button>
</template>


<script>
const mockData = `[{ "name": "Sentralen", "year": 1997, "owner": "Olsen", "city": "Oslo" }, { "name": "Olivia Restauranter", "year": 2006, "owner": "Hansen", "city": "Oslo" }, { "name": "Kulturhuset", "year": 1992, "owner": "Jacobsen", "city": "Oslo" }, { "name": "Kultur Håndverk AS", "year": 2013, "owner": "Ek", "city": "Trondheim" }, { "name": "Trondheim Kultur & Næring AS", "year": 1986, "owner": "Valle", "city": "Trondheim" }, { "name": "Kunstuttrykk", "year": 2011, "owner": "Rabben", "city": "Tromsø" }, { "name": "G-sport", "year": 2001, "owner": "Haugen", "city": "Tromsø" }, { "name": "Håndballjentene", "year": 1998, "owner": "Monsen", "city": "Bergen" }, { "name": "Kokkejævelen", "year": 2004, "owner": "Grøthe", "city": "Mo i Rana" }, { "name": "SATS", "year": 1994, "owner": "Engnes", "city": "Sandefjord" }, { "name": "H&M", "year": 2000, "owner": "Henriksen", "city": "Stavanger" }, { "name": "Nille", "year": 2010, "owner": "Krane", "city": "Kirkenes" }, { "name": "Netcom", "year": 1997, "owner": "Bakstad", "city": "Bodø" }, { "name": "Elkjøp", "year": 2006, "owner": "Borgersen", "city": "Arendal" }, { "name": "Coca-Cola AS", "year": 2008, "owner": "Østdahl", "city": "Drammen" }, { "name": "Clas Ohlsson", "year": 1992, "owner": "Bratz", "city": "Jessheim" }, { "name": "Coop", "year": 1998, "owner": "Larsen", "city": "Lillestrøm" }, { "name": "Kolonial", "year": 2002, "owner": "Bergsten", "city": "Moss" }, { "name": "Carlings", "year": 2007, "owner": "Pettersen", "city": "Sarpsborg" }, { "name": "Ridestore", "year": 2000, "owner": "Ellingsen", "city": "Skien" }]`;

export default {
  data() {
    return {
      sort: {
        key: "name",
        order: "asc",
      },

      content: JSON.parse(mockData),
    };
  },

  created() {
    const query = this.$route.query;

    if (query.sort) {
      this.sort.key = query.sort;
    }

    if (query.order) {
      this.sort.order = query.order;
    }
  },

  computed: {
    alphabeticalSort() {
      const key = this.sort.key;
      const orderValue = this.sort.order === "asc" ? 1 : -1;

      function compareFunction(a, b) {
        if (a[key] > b[key]) {
          return 1;
        } else if (a[key] < b[key]) {
          return -1;
        } else {
          return 0;
        }
      }

      return this.content.sort((a, b) => compareFunction(a, b) * orderValue);
    },

    naturalSort() {
      const key = this.sort.key;
      const orderValue = this.sort.order === "asc" ? 1 : -1;

      function compareFunction(a, b) {
        a = a[key].toString();
        b = b[key].toString();

        return a.localeCompare(b, undefined, { numeric: true });
      }

      return this.content.sort((a, b) => compareFunction(a, b) * orderValue);
    },
  },

  methods: {
    sortBy(key) {
      this.sort.key = key;
      this.$router.push({
        query: { ...this.$route.query, sort: this.sort.key },
      });
    },

    toggleSortOrder() {
      this.sort.order = this.sort.order === "asc" ? "desc" : "asc";
      this.$route.push({
        query: { ...this.$route.query, order: this.sort.order },
      });
    },
  },
};
</script>


<style>
/* Style av tabellen */

.table__controller {
  font-weight: normal;
  letter-spacing: 0px;
  font-style: normal;
  line-height: 1.6em;
  letter-spacing: 0.01em;
  font-size: 17px;
  color: black;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-align: center;
  width: 1400px;
  margin: 0 auto 0 auto;
}

.table {
  font-weight: normal;
  letter-spacing: 0px;
  font-style: normal;
  line-height: 1.6em;
  letter-spacing: 0.01em;
  font-size: 17px;
  color: black;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-align: center;
  width: 1400px;
  margin: 0 auto 0 auto;
}

.table__header {
  font-size: 40px;
}
</style>