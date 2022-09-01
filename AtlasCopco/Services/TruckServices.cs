using AtlasCopco.Dto.Truck;
using AtlasCopco.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AtlasCopco.Services
{
    public class TruckServices : ITruckService
    {

        private string query;
        private IAccessMethodsSql _AccessMethodsSql;

        public TruckServices(IAccessMethodsSql IAccessMethodsSql)
        {
            _AccessMethodsSql = IAccessMethodsSql;
        }

        public async Task<CreateTruckdto> CreateTruck(CreateTruckdto CreateTruckdto)
        {
            this.query = String.Format("INSERT INTO Camiones (nombre, marca,modelo,matricula) VALUES('{0}', '{1}', '{2}','{3}')", CreateTruckdto.nombre, CreateTruckdto.marca, CreateTruckdto.modelo, CreateTruckdto.matricula);
            try
            {
                CreateTruckdto.camionCreado = Convert.ToInt32(_AccessMethodsSql.CrudDataToSql(this.query).Result);
            }
            catch (Exception ex)
            {
                CreateTruckdto = null;
            }
            return CreateTruckdto;
        }

        public async Task<bool> DeleteTruck(int id)
        {
            bool correctDeleteTruck = false;
            this.query = String.Format("DELETE Camiones where id = {0} ", id);
            try
            {
                if (Convert.ToInt32(_AccessMethodsSql.CrudDataToSql(this.query).Result) > 0)
                {
                    correctDeleteTruck = true;
                }
            }
            catch (Exception ex)
            {

            }

            return correctDeleteTruck;
        }

        public async Task<List<TrucksDatasDto>> GetListTrucks()
        {

            List<TrucksDatasDto> listTrucksDatasDto = new List<TrucksDatasDto>();

            this.query = String.Format("SELECT [id],[nombre],[marca],[modelo],[matricula],ISNULL([camionCreado],0) AS camionCreado FROM Camiones");
            try
            {
                listTrucksDatasDto =  _AccessMethodsSql.GetListDatasFromSQL<TrucksDatasDto>(this.query);
            }
            catch (Exception ex)
            {
                string axel = "axe";
            }
            this.query = "";
            return listTrucksDatasDto;
        }

        public async Task<bool> UpdateTruck(UpdateTruckdto updateTruckdto)
        {
            bool correctUpdateTruck = false;
            this.query = String.Format("UPDATE Camiones SET nombre = '{0}',marca = '{1}', modelo = '{2}', matricula = '{3}' FROM Camiones where id = {4} " , updateTruckdto.nombre, updateTruckdto.marca, updateTruckdto.modelo, updateTruckdto.matricula , updateTruckdto.id);
            try
            {
                if (Convert.ToInt32(_AccessMethodsSql.CrudDataToSql(this.query).Result) >0)
                {
                    correctUpdateTruck = true;
                }
            }
            catch (Exception ex)
            {

            }

            return correctUpdateTruck;
        }
    }
}
