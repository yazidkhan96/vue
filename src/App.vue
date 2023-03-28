<template>
  <div id="app">
    <div class="container-fluid mx-4">
      <div class="currency mb-3 mt-3">
        <h5 class="text-capitalize">
          cost detail <i class="bi bi-arrow-down-short"></i>
        </h5>
      </div>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Qty</th>
            <th scope="col">UOM</th>
            <th scope="col" :style="PriceStyle">Unit Price</th>
            <th scope="col">Discount(%)</th>
            <th scope="col">VAT(%)</th>
            <th scope="col"></th>
            <th scope="col">Currency</th>
            <th scope="col">Vat Amount</th>
            <th scope="col">Sub total</th>
            <th scope="col">Total</th>
            <th scope="col">Charge To</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody v-for="(data, index) in count" :key="index">
          <tr>
            <td :style="DescStyle">
              <input-atom
                customClass="input-desc"
                type="text"
                placeholder="Description"
              />
            </td>
            <td :style="QtyStyle">
              <input-atom
                customClass="input-qty"
                type="text"
                placeholder="Qty"
              />
            </td>
            <td class="uom" v-for="currency in currencies" :key="currency.id">
              <dropdown-atom
                :options="currency"
                :key="currencies.id"
                label="SHP"
              />
            </td>
            <td :style="PriceStyle">
              <input-atom
                customClass="input-price"
                type="text"
                placeholder="Unit Price"
              />
            </td>
            <td>0</td>
            <td>0</td>
            <td><i class="fa-sharp fa-solid fa-arrow-right"></i></td>
            <td
              class="currency"
              v-for="currency in currencies"
              :key="currency.id"
            >
              <dropdown-atom
                :options="currency"
                :key="currencies.id"
                label="USD"
              />
            </td>
            <td>0.00</td>
            <td>0.00</td>
            <td>0.00</td>
            <td
              class="charge"
              v-for="currency in currencies"
              :key="currency.id"
            >
              <dropdown-atom
                :options="currency"
                :key="currencies.id"
                label="Select Option"
              />
            </td>
            <td>
              <button-atom @click="removeComponent" type="secondary"
                >-</button-atom
              >
            </td>
          </tr>
        </tbody>
      </table>
      <table class="table table-hover">
        <tbody>
          <tr>
            <td :style="exchangeStyle">
              <h5>Exchange rate 1 USD = <span>3.675</span><span>AED</span></h5>
            </td>
            <div class="d-flex flex-column">
              <td class="p-0">
                <div class="d-flex mt-0">
                  <h6>AED in TOTAL</h6>
                  <p class="vat">0.00</p>
                  <p class="sub">0.00</p>
                  <p class="total">0.00</p>
                </div>
              </td>
              <td class="p-0">
                <div class="d-flex">
                  <h6>USD in TOTAL</h6>
                  <p class="vat">0.00</p>
                  <p class="sub">0.00</p>
                  <p class="total">0.00</p>
                </div>
              </td>
            </div>
            <td class="p-0">
              <button-atom extraStyle="mr-1" @click="addComponent"
                >+</button-atom
              >
            </td>
          </tr>
        </tbody>
      </table>
      <div class="row">
        <div class="col-xl-12">
          <div class="d-flex justify-content-end mr-4 mt-4">
            <button-atom type="text" extraStyle="ml-3">Cancel</button-atom>
            <button-atom
              type="outlained-secondary"
              size="long"
              extraStyle="ml-3"
              >Save as Draft</button-atom
            >
            <button-atom size="long" extraStyle="ml-3">Submit</button-atom>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonAtom from "./components/atoms/ButtonAtom.vue";
import DropdownAtom from "./components/atoms/DropdownAtom.vue";
import InputAtom from "./components/atoms/InputAtom.vue";

export default {
  name: "App",
  components: { DropdownAtom, ButtonAtom, InputAtom },

  computed: {
    QtyStyle() {
      return {
        width: "100px",
      };
    },
    PriceStyle() {
      return {
        width: "140px",
      };
    },
    DescStyle() {
      return {
        width: "170px",
      };
    },
    exchangeStyle() {
      return {
        width: "49rem",
      };
    },
    currencyStyle() {
      return {
        width: "10rem",
      };
    },
    vatStyle() {
      return {
        width: "9rem",
      };
    },
    subStyle() {
      return {
        width: "7rem",
      };
    },
    totalStyle() {
      return { width: "22.5625rem" };
    },
    currencies() {
      return this.$store.state.currencies;
    },
  },
  data() {
    return {
      count: 2,
      selected: "",
    };
  },
  methods: {
    addComponent() {
      this.count++;
    },
    removeComponent() {
      this.count--;
    },
  },
  mounted() {
    this.$store.dispatch("fetchCurrency");
  },
};
</script>

<style>
.currency h5 {
  color: #57c5b6;
  font-weight: 600;
}

.currency h5 i {
  font-size: 1.5rem;
}

table.table-hover thead tr th {
  color: #565656;
  font-weight: 500;
}

.input-qty {
  width: 90%;
}
.input-desc {
  width: 100%;
}

.input-price {
  width: 80%;
}
td .dropdown {
  padding: 0;
}
td .dropdown button {
  padding: 0;
}
td .dropdown:focus {
  box-shadow: none;
  outline: none;
}

td .dropdown:focus-visible {
  box-shadow: none;

  outline: none;
}
td .dropdown button.dropdown-toggle {
  color: #565656;
}

td .dropdown button.dropdown-toggle:focus {
  box-shadow: none;
  outline: none;
}

td .dropdown button.dropdown-toggle:focus-visible {
  box-shadow: none;
  outline: none;
}
td .dropdown .dropdown-menu {
  min-width: 0;
}
td.charge .dropdown .dropdown-menu {
  min-width: 70%;
  text-align: center;
}
td .dropdown .dropdown-menu .dropdown-item {
  padding: 0.25rem 0.5rem;
  color: #565656;
}

td.charge .dropdown {
  border: none;
  padding: 0.2rem;
}

td.charge .dropdown button.dropdown-toggle {
  color: #a4a4a4;
  vertical-align: baseline;
}

td.charge .dropdown button.dropdown-toggle::after {
  margin-left: 0.5rem;
}
p.vat {
  margin-left: 2rem;
}
p.sub {
  margin-left: 6.95rem;
}
p.total {
  margin-left: 5.4rem;
}
button.btn-default {
  background: #57c5b6;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
}

button.btn-secondary {
  background: #cfc7c7;
  color: #222;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
}
button.btn-text {
  background: transparent;
  border: none;
  color: #222;
}
button.btn-outlained-secondary {
  background: transparent;
  border: 1px solid #cfc7c7;
  color: #222;
}
button.btn-long {
  padding: 0.7rem 4rem;
}
</style>
