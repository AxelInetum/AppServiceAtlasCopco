
using AtlasCopco.Dto.Order;
using AtlasCopco.Dto.Truck;
using AtlasCopco.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Threading.Tasks;

namespace AtlasCopco.Controllers
{

    [Route("api")]
    [ApiController]
    //[Authorize]
    public class OrderController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IOrderService _orderService;

        public OrderController(IOrderService orderService, IConfiguration configuration)
        {
            _configuration = configuration;
            _orderService = orderService;
        }
        /// <summary>
        /// Obtiene una listado de pedidos
        /// </summary>
        /// <returns></returns>
        [HttpGet ("Order")]
        public async Task<JsonResult> Get()
        {
            return new JsonResult(await _orderService.GetListOrders());
        }

        /// <summary>
        /// Obtiene una listado de tipos de pedidos 
        /// </summary>
        /// <returns></returns>
        [HttpGet("Order/types")]
        public async Task<JsonResult> GetTypes()
        {
            return new JsonResult(await _orderService.GetListTypesOrders());
        }

        /// <summary>
        /// Guarda en base de datos un nuevo pedido
        /// </summary>
        /// <param name="CreateTruckdto"></param>
        /// <returns></returns>
        [HttpPost("Order")]
        public async Task<JsonResult> Post(CreateOrderDto createOrderDTO)
        {
            return new JsonResult(await _orderService.CreateOrder(createOrderDTO));
        }

        /// <summary>
        /// Actualiza un los datos de un pedido
        /// </summary>
        /// <param name="studentDTO"></param>
        /// <returns></returns>
        [HttpPut("Order")]
        public async Task<JsonResult> Put(UpdateOrderdto updateTruckdto)
        {

            return new JsonResult(await _orderService.UpdateOrder(updateTruckdto));
        }

        /// <summary>
        /// Borra un pedido de base de datos 
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpDelete("Order/{id}")]
        public async Task<JsonResult> Delete(int id)
        {
            return new JsonResult(await _orderService.DeleteOrder(id));
        }
    }
}
