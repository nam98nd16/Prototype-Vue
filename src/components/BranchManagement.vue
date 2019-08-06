<template>
    <div style="padding-left: 10px; padding-bottom:5px; padding-right:10px">
        <br>
        <h3 style="text-align: left; font-weight: 550">Branch Management<span style="position:relative; top:-15px; color: grey">×</span></h3>
        <div class="card" style="padding-bottom:10px">
            <br>
            <b-container fluid>
                <b-table v-if="showMain"
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

                    <template slot="actions" slot-scope="data">
                        <b-button style="background-color:purple" size="sm" @click="openSettings(data.item)" class="mr-1">
                        Settings
                        </b-button>
                    </template>

                </b-table>

                <div v-if="showSettings">
                    <b-button style="float:left" variant="outline-primary" size="sm" @click="closeSettings"><span style="display:inline-block; width: 5px;"></span>Return<span style="display:inline-block; width: 5px;"></span></b-button>
                    <br><br>
                    <div class="card">
                        <div style="padding-bottom:50px">
                            <div style="width:450px; height: 0px; padding-bottom:20px">
                                <p style="font-size:14px; position:relative; padding-top:7px">Branch Code: {{ selectedItem.code }}</p>
                                <p style="font-size:14px; position:relative; height:10px">Branch Name: {{ selectedItem.name }}</p>
                            </div>
                            <div style="margin-left: 900px; height:0px; padding-top:0px">
                                <p>Branch Setting: </p>
                                <b-button style="margin-top: -80px; margin-left: 220px; background-color:purple" @click="showConfirmationBox(selectedItem.code)" :disabled="!selectedItem.isActive">Not Using</b-button>
                                <b-button style="margin-top: -127px; margin-left: 420px; background-color:purple" @click="showConfirmationBox(selectedItem.code)" :disabled="selectedItem.isActive">Using</b-button>
                            </div>
                        </div>
                    </div>
                    <br>
                    <b-card>
                        <b-button disabled variant="danger" style="float:right; width: 90px"><span><div style="position: relative; top:-2px; right: 3px; float:left"><v-icon name="trash-alt" fixed="bottom"/></div></span>Delete</b-button>
                        <br><br>
                        <div style="display-flex">
                            <div class="card" style="float:left; text-align:left; width: 230px">
                                <div style="padding-left: 14px; padding-bottom: 13px; padding-top:10px">
                                    <p style="height:10px">Select branch</p>
                                    <select style="width:200px" v-model="selectedBranch">
                                        <option v-for="branch in items" :value="branch" :key="branch.code">
                                            {{ branch.name }}
                                        </option>
                                    </select>

                                    <p style="position:relative; padding-top:10px; height:19px">Select employee</p>
                                    <select style="width:200px" v-model="selectedEmployee">
                                        <option v-for="employee in selectedBranch.employees" :value="employee" :key="employee.eName">
                                            {{ employee.eName }}
                                        </option>
                                    </select>
                                    <br><br>
                                    <b-button :disabled="selectedEmployee == ''" style="width:200px; background-color: purple"><span><div style="float:left; padding-bottom:2px"><v-icon name="regular/hand-point-up" fixed="bottom"/></div></span> Set as contact point</b-button>
                                </div>
                            </div>
                            <b-table v-if="" style="width: 1175px; float: right"
                                show-empty head-variant="light"
                                hover
                                stacked="md"
                                :items="selectedItemEmployees"
                                :fields="employeeFields"
                                :current-page="currentPage"
                                :bordered="true"
                                :small="true"
                                >

                                <template slot="HEAD_delete" slot-scope="data">
                                    <div style="padding-bottom:2px"><v-icon name="trash-alt" fixed="bottom"/></div>
                                </template>

                                <template slot="delete" slot-scope="data">
                                    <b-form-checkbox style="position:relative; padding-left:32px"></b-form-checkbox>
                                </template>
                            </b-table>
                        </div>
                    </b-card>
                    <br>
                    <div style="display:flex">
                        <b-button style="background-color: purple; float:left; width: 90px"><span><div style="position: relative; top:-2px; right: 3px; float:left"><v-icon name="save" fixed="bottom"/></div></span>Save</b-button>
                        <b-button variant="outline-primary" style="margin-left: 15px; width: 90px"><span><div style="position: relative; top:-2px; right: 3px; float:left"><v-icon name="sync-alt" fixed="bottom"/></div></span>Reset</b-button>
                    </div>
                </div>

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
          { isActive: true, code: 40, name: 'A', manager_name: 'Deathless', employees: [{eName: 'Nam', position: 'intern', workplace: 'A'}, {eName: 'Nam2', position: 'intern', workplace: 'A'}, {eName: 'Nam3', position: 'intern', workplace: 'A'}, {eName: 'Nam4', position: 'intern', workplace: 'A'}, {eName: 'Nam5', position: 'intern', workplace: 'A'}, {eName: 'Nam6', position: 'intern', workplace: 'A'}] },
          { isActive: false, code: 21, name: 'B', manager_name: 'Unnamed' , employees: [{eName: 'B1', position: 'Bpostion', workplace: 'B'}, {eName: 'B2', position: 'Bpostion', workplace: 'B'}, {eName: 'B3', position: 'Bpostion', workplace: 'B'}]},
          { isActive: false, code: 9, name: 'C', manager_name: 'Nameless', employees: [{eName: 'C1', position: 'Cpostion', workplace: 'C'}, {eName: 'C2', position: 'Cpostion', workplace: 'C'}, {eName: 'C3', position: 'Cpostion', workplace: 'C'}]},
          { isActive: false, code: 89, name: 'D', manager_name: 'Undying', employees: [{eName: 'D1', position: 'Dpostion', workplace: 'D'}, {eName: 'D2', position: 'Dpostion', workplace: 'D'}, {eName: 'D3', position: 'Dpostion', workplace: 'D'}] },
          { isActive: true, code: 38, name: 'E', manager_name: 'Gargantuar', employees: [{eName: 'E1', position: 'Epostion', workplace: 'E'}, {eName: 'E2', position: 'Epostion', workplace: 'E'}, {eName: 'E3', position: 'Epostion', workplace: 'E'}] },
          { isActive: false, code: 27, name: 'F', manager_name: 'Unknown', employees: [{eName: 'F1', position: 'Fpostion', workplace: 'F'}, {eName: 'F2', position: 'Fpostion', workplace: 'F'}, {eName: 'F3', position: 'Fpostion', workplace: 'F'}] },
          { isActive: true, code: 40, name: 'G', manager_name: 'Zomboss', employees: [{eName: 'G1', position: 'Gpostion', workplace: 'G'}, {eName: 'G2', position: 'Gpostion', workplace: 'G'}, {eName: 'G3', position: 'Gpostion', workplace: 'G'}] },
          { isActive: true, code: 87, name: 'H', manager_name: 'High Priest', employees: [{eName: 'H1', position: 'Hpostion', workplace: 'H'}, {eName: 'H2', position: 'Hpostion', workplace: 'H'}, {eName: 'H3', position: 'Hpostion', workplace: 'H'}]},
          { isActive: false, code: 26, name: 'I', manager_name: 'Buckethead', employees: [{eName: 'I1', position: 'Ipostion', workplace: 'I'}, {eName: 'I2', position: 'Ipostion', workplace: 'I'}, {eName: 'I3', position: 'Ipostion', workplace: 'I'}] },
          { isActive: false, code: 22, name: 'J', manager_name: 'Conehead', employees: [{eName: 'J1', position: 'Jpostion', workplace: 'J'}, {eName: 'J2', position: 'Jpostion', workplace: 'J'}, {eName: 'J3', position: 'Jpostion', workplace: 'J'}] },
          { isActive: true, code: 38, name: 'K', manager_name: 'Wizard', employees: [{eName: 'K1', position: 'Kpostion', workplace: 'K'}, {eName: 'K2', position: 'Kpostion', workplace: 'K'}, {eName: 'K3', position: 'Kpostion', workplace: 'K'}] },
          { isActive: false, code: 50, name: 'L', manager_name: 'Barbarian', employees: [{eName: 'L1', position: 'Lpostion', workplace: 'L'}, {eName: 'L2', position: 'Lpostion', workplace: 'L'}, {eName: 'L3', position: 'Lpostion', workplace: 'L'}] },
          { isActive: true, code: 51, name: 'M', manager_name: 'Archer', employees: [{eName: 'M1', position: 'Mpostion', workplace: 'M'}, {eName: 'M2', position: 'Mpostion', workplace: 'M'}, {eName: 'M3', position: 'Mpostion', workplace: 'M'}] },
          { isActive: false, code: 52, name: 'N', manager_name: 'Ice', employees: [{eName: 'N1', position: 'Npostion', workplace: 'N'}, {eName: 'N2', position: 'Npostion', workplace: 'N'}, {eName: 'N3', position: 'Npostion', workplace: 'N'}] },
          { isActive: true, code: 53, name: 'O', manager_name: 'Fire', employees: [{eName: 'O1', position: 'Opostion', workplace: 'O'}, {eName: 'O2', position: 'Opostion', workplace: 'O'}, {eName: 'O3', position: 'Opostion', workplace: 'O'}] },
          { isActive: false, code: 54, name: 'P', manager_name: 'Rocket', employees: [{eName: 'P1', position: 'Ppostion', workplace: 'P'}, {eName: 'P2', position: 'Ppostion', workplace: 'P'}, {eName: 'P3', position: 'Ppostion', workplace: 'P'}] },
          { isActive: true, code: 55, name: 'Q', manager_name: 'Lightning', employees: [{eName: 'Q1', position: 'Qpostion', workplace: 'Q'}, {eName: 'Q2', position: 'Qpostion', workplace: 'Q'}, {eName: 'Q3', position: 'Qpostion', workplace: 'Q'}] },
          { isActive: false, code: 56, name: 'R', manager_name: 'Fisherman', employees: [{eName: 'R1', position: 'Rpostion', workplace: 'R'}, {eName: 'R2', position: 'Rpostion', workplace: 'R'}, {eName: 'R3', position: 'Rpostion', workplace: 'R'}] }
        ],
        fields: [
          { key: 'actions', label: '', class: "fit" },
          { key: 'code', label: 'Branch Code', sortable: true, class:"text-left" },
          { key: 'name', label: 'Branch Name', sortable: true, class:"text-left" },
          { key: 'manager_name', label: 'Manager Name', sortable: true, class:"text-left"  },
          { key: 'isActive', label: 'Status', sortable: true, class:"fit2" }
        ],
        employeeFields: [
            { key: 'eName', label: 'Employee Name'},
            { key: 'position', label: 'Position'},
            { key: 'workplace', label: 'Workplace'},
            { key: 'delete', label: '', class: 'fit'}        ],
        totalRows: 1,
        currentPage: 1,
        filter: null,
        showMain: true,
        showSettings: false,
        selectedItem: '',
        selectedItemEmployees: [],
        selectedBranch: '',
        selectedEmployee: '',
        infoModal: {
          id: 'info-modal',
          title: '',
          content: ''
        }
      }
    },
    mounted() {
      // Set the initial number of items
      this.filter = ""
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
      },
      openSettings(item) {
          this.selectedItem = item
          this.selectedItemEmployees = item.employees
          this.showMain = false
          this.showSettings = true
      },
      closeSettings() {
          this.selectedBranch = ''
          this.selectedEmployee = ''
          this.showMain = true
          this.showSettings = false
      },
      updateStatus(BranchCode) {
          //console.log(this.items.findIndex(x => x.code == BranchCode))
          this.items[this.items.findIndex(x => x.code == BranchCode)].isActive = !this.items[this.items.findIndex(x => x.code == BranchCode)].isActive
      },
      showConfirmationBox(code) {
        this.$bvModal.msgBoxConfirm('Do you really wish to switch the status of this branch?', {
          title: 'Confirmation',
          size: 'sm',
          buttonSize: 'sm',
          okVariant: 'danger',
          okTitle: 'YES',
          cancelTitle: 'NO',
          footerClass: 'p-2',
          hideHeaderClose: false,
          centered: true
        })
          .then(value => {
            if (value) {
                this.updateStatus(code)
            }
          })
          .catch(err => {
            // An error occurred
          })
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