<template>
    <div style="padding-left: 10px; padding-bottom:5px; padding-right:10px">
        <br>
        <h3 style="text-align: left; font-weight: 550">Branch Management<span style="position:relative; top:-15px">×</span></h3>
        <div class="card">
            <br>
            <b-container fluid>
                <b-table
                show-empty head-variant="light"
                hover
                stacked="md"
                :items="items"
                :fields="fields"
                :current-page="currentPage"
                :filter="filter"
                :bordered="true"
                :small="true"
                >

                    <template slot="HEAD_isActive" slot-scope="data">
                        <div style="text-align:left">
                            <p>{{ data.label }}</p>
                            <b-dropdown type="light" variant="primary" text="Select">
                                <b-dropdown-item @click="filter='true'" >Using</b-dropdown-item>
                                <b-dropdown-item @click="filter='false'">Not Using</b-dropdown-item>
                                <b-dropdown-item @click="filter=''">All</b-dropdown-item>
                            </b-dropdown>
                        </div>
                    </template>

                    <template slot="HEAD_code" slot-scope="data">
                        <p>{{ data.label }}</p>
                    </template>

                    <template slot="HEAD_name" slot-scope="data">
                        <p>{{ data.label }}</p>
                    </template>

                    <template slot="HEAD_manager_name" slot-scope="data">
                        <p>{{ data.label }}</p>
                    </template>

                    <template slot="isActive" slot-scope="row">
                        {{ row.value ? 'Using' : 'Not Using' }}
                    </template>

                    <template slot="actions" slot-scope="row">
                        <b-button style="background-color:purple" size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1">
                        Settings
                        </b-button>
                    </template>

                </b-table>


                <!-- Info modal -->
                <b-modal :id="infoModal.id" :title="infoModal.title" ok-only @hide="resetInfoModal">
                    <pre>{{ infoModal.content }}</pre>
                </b-modal>
            </b-container>
        </div>
    </div>
</template>

</template>

<script>
export default {
    data() {
      return {
        items: [
          { isActive: true, code: 40, name: 'A', manager_name: 'Deathless' },
          { isActive: false, code: 21, name: 'B', manager_name: 'Unnamed' },
          { isActive: false, code: 9, name: 'C', manager_name: 'Nameless'},
          { isActive: false, code: 89, name: 'D', manager_name: 'Undying' },
          { isActive: true, code: 38, name: 'E', manager_name: 'Gargantuar' },
          { isActive: false, code: 27, name: 'F', manager_name: 'Unknown' },
          { isActive: true, code: 40, name: 'G', manager_name: 'Zomboss' },
          { isActive: true, code: 87, name: 'H', manager_name: 'High Priest'},
          { isActive: false, code: 26, name: 'I', manager_name: 'Buckethead' },
          { isActive: false, code: 22, name: 'J', manager_name: 'Conehead' },
          { isActive: true, code: 38, name: 'K', manager_name: 'Wizard' },
          { isActive: false, code: 50, name: 'L', manager_name: 'Barbarian' },
          { isActive: true, code: 51, name: 'M', manager_name: 'Archer' },
          { isActive: false, code: 52, name: 'N', manager_name: 'Ice' },
          { isActive: true, code: 53, name: 'O', manager_name: 'Fire' },
          { isActive: false, code: 54, name: 'P', manager_name: 'Rocket' },
          { isActive: true, code: 55, name: 'Q', manager_name: 'Lightning' },
          { isActive: false, code: 56, name: 'R', manager_name: 'Fisherman' }
        ],
        fields: [
          { key: 'actions', label: '', class: "fit" },
          { key: 'code', label: 'Branch Code', sortable: true, class:"text-left" },
          { key: 'name', label: 'Branch Name', sortable: true, class:"text-left" },
          { key: 'manager_name', label: 'Manager Name', sortable: true, class:"text-left"  },
          { key: 'isActive', label: 'Status', sortable: true, class:"fit2" }
        ],
        totalRows: 1,
        currentPage: 1,
        filter: null,
        infoModal: {
          id: 'info-modal',
          title: '',
          content: ''
        }
      }
    },
    mounted() {
      // Set the initial number of items
      this.filter = "true"
    },
    methods: {
      info(item, index, button) {
        this.infoModal.title = `Row index: ${index}`
        this.infoModal.content = JSON.stringify(item, null, 2)
        this.$root.$emit('bv::show::modal', this.infoModal.id, button)
      },
      resetInfoModal() {
        this.infoModal.title = ''
        this.infoModal.content = ''
      }
    }
}
</script>

<style>
    .fit {
        width: 92px
    }
    .fit2 {
        width: 100px
    }
</style>