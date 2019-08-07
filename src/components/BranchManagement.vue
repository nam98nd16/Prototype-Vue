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
                        <b-button style="background-color:#00008B" size="sm" @click="openSettings(data.item)" class="mr-1">
                        Settings
                        </b-button>
                    </template>

                </b-table>

                <div v-if="showSettings">
                    <b-button style="float:left" variant="outline-primary" size="sm" @click="closeSettings"><span style="display:inline-block; width: 5px;"></span>Return<span style="display:inline-block; width: 5px;"></span></b-button>
                    <br><br>
                    <div class="card">
                        <div style="padding-bottom:50px;position: relative">
                            <div style="width:450px; height: 0px; padding-bottom:20px">
                                <p style="font-size:14px; position:relative; padding-top:7px">Branch Code: {{ selectedItem.code }}</p>
                                <p style="font-size:14px; position:relative; height:10px">Branch Name: {{ selectedItem.name }}</p>
                            </div>
                            <div style="position: relative; float: right; height:0px; padding-top:0px">
                                <p style="position: relative; left: -180px">Branch Setting: </p>
                                <b-button style="position: relative; top: -45px; left: -30px; background-color:#00008B" @click="showConfirmationBox(selectedItem.code)" :disabled="!selectedItem.isActive">Not Using</b-button>
                                <b-button style="position: relative; top: -45px; left: -20px ; background-color:#00008B" @click="showConfirmationBox(selectedItem.code)" :disabled="selectedItem.isActive">Using</b-button>
                            </div>
                        </div>
                    </div>
                    <br>
                    <b-card>
                        <b-button disabled variant="danger" style="float:right; width: 90px"><span><div style="position: relative; top:-2px; right: 3px; float:left"><v-icon name="trash-alt" fixed="bottom"/></div></span>Delete</b-button>
                        <br><br>
                        <div style="display:flex">
                            <div class="card" style="position: relative; float:left; text-align:left; min-width: 16%; margin-right: 20px">
                                <div style="padding-left: 14px; padding-bottom: 13px; padding-top:10px">
                                    <p style="height:10px">Select branch</p>
                                    <select style="width:94%" v-model="selectedBranch" @change="clearSelectedEmployee">
                                        <option disabled>
                                            Head office code | Head office name
                                        </option>
                                        <option v-for="branch in items" :value="branch" :key="branch.code">
                                            {{ branch.code }} <span style="display:inline-block; width: 100px;">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</span>  {{ branch.name }}
                                        </option>
                                    </select>

                                    <p style="position:relative; padding-top:10px; height:19px">Select employee</p>
                                    <select style="width:94%" v-model="selectedEmployee">
                                        <option v-if="selectedBranch != ''" disabled>
                                            Employee Code | Employee Name
                                        </option>
                                        <option v-for="employee in selectedBranch.employees" :value="employee" :key="employee.eName">
                                            {{ employee.eCode }}<span style="display:inline-block; width: 100px;">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</span> {{ employee.eName }}
                                        </option>
                                    </select>
                                    <br><br>
                                    <b-button :disabled="selectedEmployee == null" style="width:94%; background-color: #00008B"><span><div style="float:left; padding-bottom:2px"><v-icon name="regular/hand-point-up" fixed="bottom"/></div></span> Set as contact point</b-button>
                                </div>
                            </div>
                            <b-table style="position: relative; width: 100%; float: right; max-width: 83%"
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
                                    <form style="position: relative; right: 5px; top: 3px; transform: scale(1.8)">
                                        <input type="checkbox" name="checkfield" id="g01-01" style="position: relative; left: 4px" @change="processRemovalArray(data.item, $event)">
                                    </form>
                                </template>
                            </b-table>
                        </div>
                    </b-card>
                    <br>
                    <div style="display:flex">
                        <b-button style="background-color: #00008B; float:left; width: 90px"><span><div style="position: relative; top:-2px; right: 3px; float:left"><v-icon name="save" fixed="bottom"/></div></span>Save</b-button>
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
          { isActive: true, code: 40, name: 'A', manager_name: 'Deathless', employees: [{eCode: '123', eName: 'Nam', position: 'intern', workplace: 'A'}, {eCode: '141', eName: 'Nam2', position: 'intern', workplace: 'A'}, {eCode: '159', eName: 'Nam3', position: 'intern', workplace: 'A'}, {eCode: '177', eName: 'Nam4', position: 'intern', workplace: 'A'}, {eCode: '178', eName: 'Nam5', position: 'intern', workplace: 'A'}, {eCode: '178', eName: 'Nam6', position: 'intern', workplace: 'A'}] },
          { isActive: false, code: 21, name: 'B', manager_name: 'Unnamed' , employees: [{eCode: '124', eName: 'B1', position: 'Bpostion', workplace: 'B'}, {eCode: '142', eName: 'B2', position: 'Bpostion', workplace: 'B'}, {eCode: '160', eName: 'B3', position: 'Bpostion', workplace: 'B'}]},
          { isActive: false, code: 19, name: 'C', manager_name: 'Nameless', employees: [{eCode: '125', eName: 'C1', position: 'Cpostion', workplace: 'C'}, {eCode: '143', eName: 'C2', position: 'Cpostion', workplace: 'C'}, {eCode: '161', eName: 'C3', position: 'Cpostion', workplace: 'C'}]},
          { isActive: false, code: 89, name: 'D', manager_name: 'Undying', employees: [{eCode: '126', eName: 'D1', position: 'Dpostion', workplace: 'D'}, {eCode: '144', eName: 'D2', position: 'Dpostion', workplace: 'D'}, {eCode: '162', eName: 'D3', position: 'Dpostion', workplace: 'D'}] },
          { isActive: true, code: 38, name: 'E', manager_name: 'Gargantuar', employees: [{eCode: '127', eName: 'E1', position: 'Epostion', workplace: 'E'}, {eCode: '145', eName: 'E2', position: 'Epostion', workplace: 'E'}, {eCode: '163', eName: 'E3', position: 'Epostion', workplace: 'E'}] },
          { isActive: false, code: 27, name: 'F', manager_name: 'Unknown', employees: [{eCode: '128', eName: 'F1', position: 'Fpostion', workplace: 'F'}, {eCode: '146', eName: 'F2', position: 'Fpostion', workplace: 'F'}, {eCode: '164', eName: 'F3', position: 'Fpostion', workplace: 'F'}] },
          { isActive: true, code: 41, name: 'G', manager_name: 'Zomboss', employees: [{eCode: '129', eName: 'G1', position: 'Gpostion', workplace: 'G'}, {eCode: '147', eName: 'G2', position: 'Gpostion', workplace: 'G'}, {eCode: '165', eName: 'G3', position: 'Gpostion', workplace: 'G'}] },
          { isActive: true, code: 87, name: 'H', manager_name: 'High Priest', employees: [{eCode: '130', eName: 'H1', position: 'Hpostion', workplace: 'H'}, {eCode: '148', eName: 'H2', position: 'Hpostion', workplace: 'H'}, {eCode: '166', eName: 'H3', position: 'Hpostion', workplace: 'H'}]},
          { isActive: false, code: 26, name: 'I', manager_name: 'Buckethead', employees: [{eCode: '131', eName: 'I1', position: 'Ipostion', workplace: 'I'}, {eCode: '149', eName: 'I2', position: 'Ipostion', workplace: 'I'}, {eCode: '167', eName: 'I3', position: 'Ipostion', workplace: 'I'}] },
          { isActive: false, code: 22, name: 'J', manager_name: 'Conehead', employees: [{eCode: '132', eName: 'J1', position: 'Jpostion', workplace: 'J'}, {eCode: '150', eName: 'J2', position: 'Jpostion', workplace: 'J'}, {eCode: '168', eName: 'J3', position: 'Jpostion', workplace: 'J'}] },
          { isActive: true, code: 39, name: 'K', manager_name: 'Wizard', employees: [{eCode: '133', eName: 'K1', position: 'Kpostion', workplace: 'K'}, {eCode: '151', eName: 'K2', position: 'Kpostion', workplace: 'K'}, {eCode: '169', eName: 'K3', position: 'Kpostion', workplace: 'K'}] },
          { isActive: false, code: 50, name: 'L', manager_name: 'Barbarian', employees: [{eCode: '134', eName: 'L1', position: 'Lpostion', workplace: 'L'}, {eCode: '152', eName: 'L2', position: 'Lpostion', workplace: 'L'}, {eCode: '170', eName: 'L3', position: 'Lpostion', workplace: 'L'}] },
          { isActive: true, code: 51, name: 'M', manager_name: 'Archer', employees: [{eCode: '135', eName: 'M1', position: 'Mpostion', workplace: 'M'}, {eCode: '153', eName: 'M2', position: 'Mpostion', workplace: 'M'}, {eCode: '171', eName: 'M3', position: 'Mpostion', workplace: 'M'}] },
          { isActive: false, code: 52, name: 'N', manager_name: 'Ice', employees: [{eCode: '136', eName: 'N1', position: 'Npostion', workplace: 'N'}, {eCode: '154', eName: 'N2', position: 'Npostion', workplace: 'N'}, {eCode: '172', eName: 'N3', position: 'Npostion', workplace: 'N'}] },
          { isActive: true, code: 53, name: 'O', manager_name: 'Fire', employees: [{eCode: '137', eName: 'O1', position: 'Opostion', workplace: 'O'}, {eCode: '155', eName: 'O2', position: 'Opostion', workplace: 'O'}, {eCode: '173', eName: 'O3', position: 'Opostion', workplace: 'O'}] },
          { isActive: false, code: 54, name: 'P', manager_name: 'Rocket', employees: [{eCode: '138', eName: 'P1', position: 'Ppostion', workplace: 'P'}, {eCode: '156', eName: 'P2', position: 'Ppostion', workplace: 'P'}, {eCode: '174', eName: 'P3', position: 'Ppostion', workplace: 'P'}] },
          { isActive: true, code: 55, name: 'Q', manager_name: 'Lightning', employees: [{eCode: '139', eName: 'Q1', position: 'Qpostion', workplace: 'Q'}, {eCode: '157', eName: 'Q2', position: 'Qpostion', workplace: 'Q'}, {eCode: '175', eName: 'Q3', position: 'Qpostion', workplace: 'Q'}] },
          { isActive: false, code: 56, name: 'R', manager_name: 'Fisherman', employees: [{eCode: '140', eName: 'R1', position: 'Rpostion', workplace: 'R'}, {eCode: '158', eName: 'R2', position: 'Rpostion', workplace: 'R'}, {eCode: '176', eName: 'R3', position: 'Rpostion', workplace: 'R'}] }
        ],
        fields: [
          { key: 'actions', label: '', class: "fit" },
          { key: 'code', label: 'Branch Code', sortable: true, class:"text-left" },
          { key: 'name', label: 'Branch Name', sortable: true, class:"text-left" },
          { key: 'manager_name', label: 'Manager Name', sortable: true, class:"text-left"  },
          { key: 'isActive', label: 'Status', sortable: true, class:"fit2" }
        ],
        employeeFields: [
            { key: 'eName', label: 'Employee Name', class: "text-left"},
            { key: 'position', label: 'Position', class: "text-left"},
            { key: 'workplace', label: 'Workplace', class: "text-left"},
            { key: 'delete', label: '', class: 'fit3'}        ],
        totalRows: 1,
        currentPage: 1,
        filter: null,
        showMain: true,
        showSettings: false,
        selectedItem: '',
        selectedItemEmployees: [],
        selectedBranch: '',
        selectedEmployee: '',
        employeesToBeRemoved: [],
        checkStatus: '',
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
          this.selectedEmployee = null
          this.showMain = true
          this.showSettings = false
      },
      updateStatus(BranchCode) {
          //console.log(this.items.findIndex(x => x.code == BranchCode))
          this.items[this.items.findIndex(x => x.code == BranchCode)].isActive = !this.items[this.items.findIndex(x => x.code == BranchCode)].isActive
      },
      clearSelectedEmployee(){
          this.selectedEmployee = null
          console.log(this.selectedEmployee)
      },
      processRemovalArray(item, event){
          if (event.target.checked) {
              this.employeesToBeRemoved.push(item)
          } else {
              var index = this.employeesToBeRemoved.indexOf(item)
              if (index > -1){
                this.employeesToBeRemoved.splice(index, 1)
              }
          }
      },
      showConfirmationBox(code) {
          this.employeesToBeRemoved.forEach(function(entry) {
              console.log(entry.eName)
          })
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
    .fit3 {
        width: 60px
    }
</style>