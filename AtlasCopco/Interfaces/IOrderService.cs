using AtlasCopco.Dto.Order;
using AtlasCopco.Dto.Truck;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AtlasCopco.Interfaces
{
    public interface IOrderService
    {
        Task<CreateOrderDto> CreateOrder(CreateOrderDto createTruckdto);
        Task<bool> UpdateOrder(UpdateOrderdto updateTruckdto);
        Task<bool> DeleteOrder(int id);
        Task<List<OrderDatasDto>> GetListOrders();
    }
}
