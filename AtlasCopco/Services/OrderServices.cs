using AtlasCopco.Dto.Order;
using AtlasCopco.Dto.Truck;
using AtlasCopco.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AtlasCopco.Services
{
    public class OrderServices : IOrderService
    {

        private string query;
        private IAccessMethodsSql _AccessMethodsSql;

        public OrderServices(IAccessMethodsSql IAccessMethodsSql)
        {
            _AccessMethodsSql = IAccessMethodsSql;
        }

        public async Task<CreateOrderDto> CreateOrder(CreateOrderDto createOrderdto)
        {
            this.query = String.Format("INSERT INTO Pedido (nombre, FechaInicio,FechaFinal, id_tipo_pedido) OUTPUT INSERTED.Id VALUES('{0}','{1}','{2}',{3})", createOrderdto.title, createOrderdto.start, createOrderdto.End, createOrderdto.Value);
            try
            {
                createOrderdto.createdOrder = Convert.ToInt32(_AccessMethodsSql.CrudDataToSqlReturnId(this.query).Result);
            }
            catch (Exception ex)
            {
                createOrderdto = null;
            }
            return createOrderdto;
        }

        public async Task<bool> DeleteOrder(int id)
        {
            bool correctDeleteOrder = false;
            this.query = String.Format("DELETE Pedido where id = {0} ", id);
            try
            {
                if (Convert.ToInt32(_AccessMethodsSql.CrudDataToSql(this.query).Result) > 0)
                {
                    correctDeleteOrder = true;
                }
            }
            catch (Exception ex)
            {

            }

            return correctDeleteOrder;
        }

        public async Task<List<OrderDatasDto>> GetListOrders()
        {
            List<OrderDatasDto> listOrdersDatasDto = new List<OrderDatasDto>();
            this.query = String.Format("SELECT Pedido.id,[nombre] as title , FORMAT([FechaInicio],'yyyy-MM-dd HH:MM:ss') as 'start' , " +
                                        "FORMAT([FechaFinal],'yyyy-MM-dd HH:MM:ss') as 'end' ,   Tipo_Pedidos.id as Value , Tipo_Pedidos.Name as Label,   " +
                                        " Tipo_Pedidos.Color as backgroundColor " +
                                        "FROM Pedido inner join Tipo_Pedidos on Pedido.id_tipo_pedido = Tipo_Pedidos.id");
            try
            {
                listOrdersDatasDto =  _AccessMethodsSql.GetListDatasFromSQL<OrderDatasDto>(this.query);
            }
            catch (Exception ex)
            {
       
            }
            return listOrdersDatasDto;
        }

        public async Task<List<TypesOrdersDto>> GetListTypesOrders()
        {
            List<TypesOrdersDto> listTypesOrdersDto = new List<TypesOrdersDto>();
            this.query = String.Format("SELECT Tipo_Pedidos.id as Value, Name as Label ,Color FROM Tipo_Pedidos ");
            
            try
            {
                listTypesOrdersDto = _AccessMethodsSql.GetListDatasFromSQL<TypesOrdersDto>(this.query);
            }
            catch (Exception ex)
            {

            }
            return listTypesOrdersDto;
        }

        public async Task<bool> UpdateOrder(UpdateOrderdto updateOrderDto)
        {
            bool correctUpdateOrder = false;
            this.query = String.Format("UPDATE PedidO SET nombre = '{0}',FechaInicio = '{1}', FechaFinal = '{2}' , id_tipo_pedido = {3} where id = {4}", updateOrderDto.Title, updateOrderDto.Start, updateOrderDto.End , updateOrderDto.Value,  updateOrderDto.id);
            try
            {
                if (Convert.ToInt32(_AccessMethodsSql.CrudDataToSql(this.query).Result) >0)
                {
                    correctUpdateOrder = true;
                }
            }
            catch (Exception ex)
            {
                string exception = ex.ToString();
            }
            return correctUpdateOrder;
        }
    }
}
