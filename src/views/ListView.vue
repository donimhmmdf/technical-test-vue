<template>
  <div class="container">
    <nav class="flex p-3">
      <ol class="inline-flex items-center text-sm text-slate-500">
        <li>
          <router-link to="/home">Home</router-link>
        </li>
        <li>
          <div class="flex items-center font-bold">
            <svg
              class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            Daftar Piutang Unit
          </div>
        </li>
      </ol>
    </nav>
    <h2 class="font-bold text-xl p-3">Piutang Unit</h2>
    <main>
      <div class="w-full p-3 rounded-lg overflow-hidden shadow-md">
        <div class="flex flex-col">
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div class="rounded-md flex justify-end z-10">
                <button
                  @click="toggleSearch"
                  class="mb-2 py-2 font-semibold hover:opacity-90 transition duration-500 ease-in-out text-sm px-2 bg-blue-600 rounded-xl text-white"
                >
                  Advanced Search
                </button>
              </div>
              <transition mode="out-in">
                <div class="mb-4 bg-red" v-show="isShow">
                  <div class="font-semibold">
                    <h2>Total</h2>
                  </div>
                  <div class="flex">
                    <div class="mb-4 self-start w-1/2">
                      <label
                        for="filterTotal"
                        class="block text-sm font-medium text-gray-500"
                        >Mulai dari</label
                      >
                      <input
                        type="number"
                        id="filterTotal"
                        name="filterTotal"
                        class="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        v-model="searchKey.totalMin"
                      />
                    </div>
                    <div class="self-center ml-1">
                      <p class="text-gray-500 font-medium">to</p>
                    </div>
                    <div class="mb-4 w-1/2 self-end ml-1">
                      <label
                        for="filterTotal"
                        class="block text-sm font-medium text-gray-500"
                        >Sampai dengan</label
                      >
                      <input
                        type="number"
                        id="filterTotal"
                        name="filterTotal"
                        class="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        v-model="searchKey.totalMax"
                      />
                    </div>
                  </div>

                  <div class="font-semibold">
                    <h2>Tanggal Lelang</h2>
                  </div>
                  <div class="flex">
                    <div class="mb-4 self-start w-1/2">
                      <label
                        for="filterTanggalLelangMin"
                        class="block text-sm font-medium text-gray-500"
                        >Mulai dari</label
                      >
                      <input
                        type="date"
                        id="filterTanggalLelalngMin"
                        name="filterTanggalLelangMin"
                        class="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        v-model="searchKey.tanggalLelangMin"
                      />
                    </div>
                    <div class="self-center ml-1">
                      <p class="text-gray-500 font-medium">to</p>
                    </div>
                    <div class="mb-4 w-1/2 self-end ml-1">
                      <label
                        for="filterTanggalLelangMax"
                        class="block text-sm font-medium text-gray-500"
                        >Sampai dengan</label
                      >
                      <input
                        type="date"
                        id="filterTanggalLelangMax"
                        name="filterTanggalLelangMax"
                        class="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        v-model="searchKey.tanggalLelangMax"
                      />
                    </div>
                  </div>
                  <div class="font-semibold">
                    <h2>Tanggal Jatuh Tempo</h2>
                  </div>
                  <div class="flex">
                    <div class="mb-4 self-start w-1/2">
                      <label
                        for="filterTanggalJatohTempoMin"
                        class="block text-sm font-medium text-gray-500"
                        >Mulai dari</label
                      >
                      <input
                        type="date"
                        id="filterTanggalJatohTempoMin"
                        name="filterTanggalJatohTempoMin"
                        class="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        v-model="searchKey.tanggalJatuhTempoMin"
                      />
                    </div>
                    <div class="self-center ml-1">
                      <p class="text-gray-500 font-medium">to</p>
                    </div>
                    <div class="mb-4 w-1/2 self-end ml-1">
                      <label
                        for="filterTanggalJatohTempoMax"
                        class="block text-sm font-medium text-gray-500"
                        >Sampai dengan</label
                      >
                      <input
                        type="date"
                        id="filterTanggalJatohTempoMax"
                        name="filterTanggalJatohTempoMax"
                        class="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        v-model="searchKey.tanggalJatuhTempoMax"
                      />
                    </div>
                  </div>
                  <div class="font-semibold">
                    <h2>Tanggal Lunas</h2>
                  </div>
                  <div class="flex">
                    <div class="mb-4 self-start w-1/2">
                      <label
                        for="filterTanggalLunasMin"
                        class="block text-sm font-medium text-gray-500"
                        >Mulai dari</label
                      >
                      <input
                        type="date"
                        id="filterTanggalLunasMin"
                        name="filterTanggalLunasgMin"
                        class="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        v-model="searchKey.tanggalLunasMin"
                      />
                    </div>
                    <div class="self-center ml-1">
                      <p class="text-gray-500 font-medium">to</p>
                    </div>
                    <div class="mb-4 w-1/2 self-end ml-1">
                      <label
                        for="filterTanggalLunasMax"
                        class="block text-sm font-medium text-gray-500"
                        >Sampai dengan</label
                      >
                      <input
                        type="date"
                        id="filterTanggalLunasMax"
                        name="filterTanggalLunasMax"
                        class="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        v-model="searchKey.tanggalLunasMax"
                      />
                    </div>
                  </div>

                  <div class="font-semibold">
                    <h2>Status</h2>
                  </div>
                  <div class="mb-4 flex">
                    <div class="mr-3">
                      <label
                        for="filterStatusLunas"
                        class="block text-sm font-medium text-gray-500"
                        >Lunas</label
                      >
                      <input
                        type="checkbox"
                        id="filterStatusLunas"
                        name="filterStatusLunas"
                        value="Lunas"
                        v-model="searchStatus"
                        class="mt-1 p-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div class="mr-3">
                      <label
                        for="filterStatusKonfirmasi"
                        class="block text-sm font-medium text-gray-500"
                        >Konfirmasi Pembayaran</label
                      >
                      <input
                        type="checkbox"
                        id="filterStatusKonfirmasi"
                        name="filterStatusKonfirmasi"
                        value="Konfirmasi Pembayaran"
                        v-model="searchStatus"
                        class="mt-1 p-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div class="">
                      <label
                        for="filterStatusProses"
                        class="block text-sm font-medium text-gray-500"
                        >Proses Pembayaran</label
                      >
                      <input
                        type="checkbox"
                        id="filterStatusProses"
                        name="filterStatusProses"
                        value="Proses Pembayaran"
                        v-model="searchStatus"
                        class="mt-1 p-2 border border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <button
                    @click="searchButton()"
                    class="mb-2 py-2 font-semibold hover:opacity-90 transition duration-500 ease-in-out text-sm px-2 bg-blue-600 rounded-xl text-white mr-2"
                  >
                    Apply Filters
                  </button>
                </div>
              </transition>
              <div class="overflow-hidden">
                <table
                  class="w-full border text-center text-sm font-light"
                  v-if="lists.length > 0"
                >
                  <thead class="border-b font-medium">
                    <tr>
                      <th
                        @click="checkAll()"
                        scope="col"
                        class="border-r cursor-pointer w-10"
                      >
                        V
                      </th>
                      <th
                        @click="sort('noKewajiban')"
                        scope="col"
                        class="border-r text-sm cursor-pointer w-24"
                      >
                        No. Kewajiban
                      </th>
                      <th
                        @click="sort('noPolisi')"
                        scope="col"
                        class="border-r cursor-pointer"
                      >
                        No. Polisi
                      </th>
                      <th
                        @click="sort('pemilik')"
                        scope="col"
                        class="border-r cursor-pointer"
                      >
                        Pemilik
                      </th>
                      <th
                        @click="sort('peserta')"
                        scope="col"
                        class="border-r cursor-pointer"
                      >
                        Peserta
                      </th>
                      <th
                        @click="sort('nomorVA')"
                        scope="col"
                        class="border-r cursor-pointer w-28"
                      >
                        Nomor VA
                      </th>
                      <th
                        @click="sort('hargaTerbentuk')"
                        scope="col"
                        class="border-r cursor-pointer"
                      >
                        Harga Terbentuk (Rp)
                      </th>
                      <th
                        @click="sort('biayaAdmin')"
                        scope="col"
                        class="border-r cursor-pointer"
                      >
                        Biaya Admin ex PPN (Rp)
                      </th>
                      <th
                        @click="sort('ppn')"
                        scope="col"
                        class="border-r cursor-pointer"
                      >
                        PPN (Rp)
                      </th>
                      <th
                        @click="sort('total')"
                        scope="col"
                        class="border-r cursor-pointer"
                      >
                        Total(Rp)
                      </th>
                      <th
                        @click="sort('tanggalLelang')"
                        scope="col"
                        class="border-r cursor-pointer"
                      >
                        Tanggal Lelang
                      </th>
                      <th
                        @click="sort('tanggalJatuhTempo')"
                        scope="col"
                        class="border-r cursor-pointer"
                      >
                        Tanggal Jatuh Tempo
                      </th>
                      <th
                        @click="sort('tanggalLunas')"
                        scope="col"
                        class="border-r cursor-pointer"
                      >
                        Tanggal Lunas
                      </th>
                      <th
                        @click="sort('status')"
                        scope="col"
                        class="border-r cursor-pointer w-40"
                      >
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      class="border-b"
                      v-for="list in lists"
                      :key="list.noKewajiban"
                    >
                      <td class="whitespace-nowrap border-r p-2">
                        <input
                          type="checkbox"
                          :value="list.noKewajiban"
                          v-model="checkedData"
                        />
                      </td>
                      <td class="whitespace-nowrap border-r p-2">
                        {{ list.noKewajiban }}
                      </td>
                      <td class="whitespace-nowrap border-r p-2">
                        {{ list.noPolisi }}
                      </td>
                      <td class="whitespace-nowrap border-r p-2">
                        {{ list.pemilik }}
                      </td>
                      <td class="whitespace-nowrap border-r p-2">
                        {{ list.peserta }}
                      </td>
                      <td class="whitespace-nowrap border-r p-2">
                        {{ list.nomorVA }}
                      </td>
                      <td class="whitespace-nowrap border-r p-2">
                        {{ list.hargaTerbentuk }}
                      </td>
                      <td class="whitespace-nowrap border-r p-2">
                        {{ list.biayaAdmin }}
                      </td>
                      <td class="whitespace-nowrap border-r p-2">
                        {{ list.ppn }}
                      </td>
                      <td class="whitespace-nowrap border-r p-2">
                        {{ list.total }}
                      </td>
                      <td class="whitespace-nowrap border-r p-2">
                        {{ list.tanggalLelang }}
                      </td>
                      <td class="whitespace-nowrap border-r p-2">
                        {{ list.tanggalJatuhTempo }}
                      </td>
                      <td class="whitespace-nowrap border-r p-2">
                        {{ list.tanggalLunas }}
                      </td>
                      <td class="whitespace-nowrap border-r p-2">
                        {{ list.status }}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div class="" v-else>
                  <h2>Data tidak ditemukan, silahkan refresh.</h2>
                </div>

                <div class="flex items-center justify-end mt-4">
                  <a
                    class="py-2 font-semibold hover:opacity-90 transition duration-500 ease-in-out text-sm px-3 bg-blue-600 mr-2 rounded-xl text-white"
                    href=""
                    >Refresh</a
                  >
                  <button
                    @click="exportData()"
                    class="py-2 font-semibold hover:opacity-90 transition duration-500 ease-in-out text-sm px-3 bg-blue-600 mr-2 rounded-xl text-white"
                    href=""
                  >
                    Export
                  </button>
                  <button
                    class="py-2 font-semibold hover:opacity-90 transition duration-500 ease-in-out text-sm px-3 bg-blue-600 rounded-xl text-white"
                    @click="bayarButton()"
                  >
                    Bayar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-end mt-3 mb-36">
          <p
            class="flex items-center mr-2 justify-items-center font-bold text-slate-500 text-md"
          >
            Tampilkan
          </p>
          <button
            class="mr-1 py-1 font-semibold hover:opacity-90 transition duration-500 ease-in-out text-sm px-2 bg-blue-600 rounded-xl text-white"
            @click="pageSize = 5"
          >
            5
          </button>
          <button
            class="mr-1 py-1 font-semibold hover:opacity-90 transition duration-500 ease-in-out text-sm px-2 bg-blue-600 rounded-xl text-white"
            @click="pageSize = 10"
          >
            10
          </button>
          <button
            class="mr-1 py-1 font-semibold hover:opacity-90 transition duration-500 ease-in-out text-sm px-2 bg-blue-600 rounded-xl text-white"
            @click="pageSize = 50"
          >
            50
          </button>
          <button
            class="mr-1 py-1 font-semibold hover:opacity-90 transition duration-500 ease-in-out text-sm px-2 bg-blue-600 rounded-xl text-white"
            @click="pageSize = 100"
          >
            100
          </button>
          <button
            class="mr-1 py-1 font-semibold hover:opacity-90 transition duration-500 ease-in-out text-sm px-2 bg-blue-600 rounded-xl text-white"
            @click="pageSize = 500"
          >
            500
          </button>
          <button
            class="mr-1 py-1 font-semibold hover:opacity-90 transition duration-500 ease-in-out text-sm px-2 bg-blue-600 rounded-xl text-white"
            @click="pageSize = this.lists.length"
          >
            All
          </button>
          <button
            class="mr-1 py-2 font-semibold hover:opacity-90 transition duration-500 ease-in-out text-sm px-3 bg-blue-600 rounded-xl text-white"
            @click="prevPage"
          >
            Previous
          </button>
          <button
            class="py-2 font-semibold hover:opacity-90 transition duration-500 ease-in-out text-sm px-3 bg-blue-600 rounded-xl text-white"
            @click="nextPage"
          >
            Next
          </button>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import exportFromJSON from "export-from-json";

export default {
  data() {
    return {
      searchKey: [
        {
          totalMin: "",
          totalMax: "",
          tanggalLelangMin: "",
          tanggalLelangMax: "",
          tanggalJatuhTempoMin: "",
          tanggalJatuhTempoMax: "",
          tanggalLunasMin: "",
          tanggalLunasMax: "",
        },
      ],
      searchStatus: [],
      isShow: false,
      currentSort: "noKewajiban",
      pageSize: 5,
      currentPage: 1,
      currentSortDir: "asc",
      checkedData: [],
      lists: [
        {
          noKewajiban: "B20116005069",
          noPolisi: "KT 3090 BJS",
          pemilik: "PT OLX",
          peserta: "Suyono",
          nomorVA: null,
          hargaTerbentuk: 93850000,
          biayaAdmin: 0,
          ppn: 0,
          total: 93850000,
          tanggalLelang: "11/11/2020",
          tanggalJatuhTempo: "17/11/2020",
          tanggalLunas: "-",
          status: "Konfirmasi Pembayaran",
        },
        {
          noKewajiban: "B20316005067",
          noPolisi: "KT 3090 JSX",
          pemilik: "PT OLX",
          peserta: "Budiman",
          nomorVA: "95621000012456",
          hargaTerbentuk: 13950000,
          biayaAdmin: 0,
          ppn: 0,
          total: 13950000,
          tanggalLelang: "10/11/2020",
          tanggalJatuhTempo: "16/11/2020",
          tanggalLunas: "14/11/2020",
          status: "Lunas",
        },
        {
          noKewajiban: "B20116005065",
          noPolisi: " B 1234 JEP",
          pemilik: "PT OLX",
          peserta: "Suherman",
          nomorVA: "95621000012459",
          hargaTerbentuk: 190000000,
          biayaAdmin: 0,
          ppn: 0,
          total: 190000000,
          tanggalLelang: "09/11/2020",
          tanggalJatuhTempo: "15/11/2020",
          tanggalLunas: "-",
          status: "Konfirmasi Pembayaran",
        },
        {
          noKewajiban: "B20116005999",
          noPolisi: " B 2343 PB",
          pemilik: "PT OLX",
          peserta: "Dika",
          nomorVA: "956210000124324",
          hargaTerbentuk: 290000000,
          biayaAdmin: 0,
          ppn: 0,
          total: 290000000,
          tanggalLelang: "09/11/2020",
          tanggalJatuhTempo: "15/11/2020",
          tanggalLunas: "-",
          status: "Konfirmasi Pembayaran",
        },
        {
          noKewajiban: "B20116005012",
          noPolisi: " Z 2343 JLP",
          pemilik: "PT OLX",
          peserta: "Budiman",
          nomorVA: "95621000012452",
          hargaTerbentuk: 190000000,
          biayaAdmin: 0,
          ppn: 0,
          total: 190000000,
          tanggalLelang: "09/11/2020",
          tanggalJatuhTempo: "15/11/2020",
          tanggalLunas: "14/11/2020",
          status: "Lunas",
        },
        {
          noKewajiban: "B20116005077",
          noPolisi: " B 6543 JEP",
          pemilik: "PT OLX",
          peserta: "Wijaya",
          nomorVA: "95621000012445",
          hargaTerbentuk: 300000000,
          biayaAdmin: 0,
          ppn: 0,
          total: 300000000,
          tanggalLelang: "09/11/2020",
          tanggalJatuhTempo: "15/11/2020",
          tanggalLunas: "-",
          status: "Proses Pembayaran",
        },
        {
          noKewajiban: "B20116005023",
          noPolisi: " B 987 JEP",
          pemilik: "PT OLX",
          peserta: "Rohimat",
          nomorVA: "95621000012459",
          hargaTerbentuk: 100000000,
          biayaAdmin: 0,
          ppn: 0,
          total: 100000000,
          tanggalLelang: "09/11/2020",
          tanggalJatuhTempo: "15/11/2020",
          tanggalLunas: "-",
          status: "Proses Pembayaran",
        },
        {
          noKewajiban: "B20116005992",
          noPolisi: " B 2957 JEP",
          pemilik: "PT OLX",
          peserta: "Agus",
          nomorVA: "95621000012459",
          hargaTerbentuk: 900000000,
          biayaAdmin: 0,
          ppn: 0,
          total: 900000000,
          tanggalLelang: "09/11/2020",
          tanggalJatuhTempo: "15/11/2020",
          tanggalLunas: "14/11/2020",
          status: "Lunas",
        },
      ],
    };
  },

  components: {
    Navbar,
  },
  methods: {
    exportData() {
      const data = this.lists;
      const date = new Date().toLocaleString("en-US");
      const fileName = `Data Piutang - ${date}`;
      const exportType = exportFromJSON.types.xls;

      if (data) exportFromJSON({ data, fileName, exportType });
      console.log(this.lists);
      console.log(date);
    },
    checkAll() {
      if (this.checkedData.length === this.lists.length) {
        this.checkedData = [];
      } else {
        this.checkedData = this.lists.map((item) => item.noKewajiban);
      }
    },
    searchButton() {
      let filteredData = this.lists;
      if (this.searchStatus.length > 0) {
        filteredData = filteredData.filter((list) => {
          return this.searchStatus.includes(list.status);
        });
      }
      if (this.searchKey.tanggalLunasMin && this.searchKey.tanggalLunasMax) {
        const minDate = new Date(
          this.searchKey.tanggalLunasMin
        ).toLocaleDateString("id-ID");
        const maxDate = new Date(
          this.searchKey.tanggalLunasMax
        ).toLocaleDateString("id-ID");
        filteredData = filteredData.filter((list) => {
          const tanggalLunas = list.tanggalLunas;
          return tanggalLunas >= minDate && tanggalLunas <= maxDate;
        });
      }
      if (this.searchKey.tanggalLelangMin && this.searchKey.tanggalLelangMax) {
        const minDate = new Date(
          this.searchKey.tanggalLelangMin
        ).toLocaleDateString("id-ID");
        const maxDate = new Date(
          this.searchKey.tanggalLelangMax
        ).toLocaleDateString("id-ID");
        filteredData = filteredData.filter((list) => {
          const tanggalLelang = list.tanggalLelang;
          return tanggalLelang >= minDate && tanggalLelang <= maxDate;
        });
      }
      if (
        this.searchKey.tanggalJatuhTempoMin &&
        this.searchKey.tanggalJatuhTempoMax
      ) {
        const minDate = new Date(
          this.searchKey.tanggalJatuhTempoMin
        ).toLocaleDateString("id-ID");
        const maxDate = new Date(
          this.searchKey.tanggalJatuhTempoMax
        ).toLocaleDateString("id-ID");
        filteredData = filteredData.filter((list) => {
          const tanggalJatuhTempo = list.tanggalJatuhTempo;
          return tanggalJatuhTempo >= minDate && tanggalJatuhTempo <= maxDate;
        });
      }
      if (this.searchKey.totalMin && this.searchKey.totalMax) {
        const minTotal = this.searchKey.totalMin;
        const maxTotal = this.searchKey.totalMax;
        filteredData = filteredData.filter((list) => {
          const total = list.total;
          return total >= minTotal && total <= maxTotal;
        });
      }
      this.lists = filteredData;
    },
    toggleSearch() {
      this.isShow = !this.isShow;
    },
    nextPage() {
      if (this.currentPage * this.pageSize < this.lists.length)
        this.currentPage++;
    },
    prevPage() {
      if (this.currentPage > 1) this.currentPage--;
    },
    sort(param) {
      if (param === this.currentSort) {
        this.currentSortDir = this.currentSortDir === "asc" ? "desc" : "asc";
      }
      this.currentSort = param;
    },
    bayarButton() {
      if (this.checkedData.length < 1) {
        this.$toast.error("Pilih data terlebih dahulu", {
          position: "top",
        });
      } else {
        this.lists.filter((list) => {
          this.checkedData.filter((check) => {
            if (list.noKewajiban === check) {
              if (list.status === "Lunas") {
                this.$toast.warning("Status sudah lunas", {
                  position: "top",
                });
              } else {
                list.status = "Lunas";
                list.tanggalLunas = new Date().toLocaleDateString("id-ID");
                this.$toast.success("Pembayaran berhasil", {
                  position: "top",
                });
              }
            }
          });
        });
      }
      this.checkedData = [];
    },
  },
  computed: {
    lists: function () {
      return this.lists
        .sort((a, b) => {
          let modifier = 1;
          if (this.currentSortDir === "desc") modifier = -1;
          if (a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
          if (a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
          return 0;
        })
        .filter((row, index) => {
          let start = (this.currentPage - 1) * this.pageSize;
          let end = this.currentPage * this.pageSize;
          if (index >= start && index < end) return true;
        });
    },
  },
};
</script>

<style>
.v-enter-active {
  transition: 0.9s ease-in-out;
  transform: translateY(0%);
}
.v-leave-active {
  transition: opacity 0.9s ease-in-out;
}

.v-enter-from {
  transition: 0.9s ease-in-out;
  transform: translateY(-100%);
}
.v-leave-to {
  transition: 0.9s ease-in-out;
  transform: translateY(-100%);
}
</style>
