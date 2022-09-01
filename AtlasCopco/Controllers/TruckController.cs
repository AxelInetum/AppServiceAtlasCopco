
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
    public class TruckController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly ITruckService _truckService;

        public TruckController(ITruckService studentService, IConfiguration configuration)
        {
            _configuration = configuration;
            _truckService = studentService;
        }
        /// <summary>
        /// Obtiene una lista de camiones
        /// </summary>
        /// <returns></returns>
        [HttpGet ("Truck")]
        public async Task<JsonResult> Get()
        {
            return new JsonResult(await _truckService.GetListTrucks());
        }

        /// <summary>
        /// Guarda en base de datos un nuevo camión
        /// </summary>
        /// <param name="CreateTruckdto"></param>
        /// <returns></returns>
        [HttpPost("Truck")]
        public async Task<JsonResult> Post(CreateTruckdto createTruckDTO)
        {
            return new JsonResult(await _truckService.CreateTruck(createTruckDTO));
        }

        /// <summary>
        /// Actualiza un los datos de un camion
        /// </summary>
        /// <param name="studentDTO"></param>
        /// <returns></returns>
        [HttpPut("Truck")]
        public async Task<JsonResult> Put(UpdateTruckdto updateTruckdto)
        {

            return new JsonResult(await _truckService.UpdateTruck(updateTruckdto));
        }

        /// <summary>
        /// Borra un camion de base de datos 
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpDelete("Truck/{id}")]
        public async Task<JsonResult> Delete(int id)
        {
            return new JsonResult(await _truckService.DeleteTruck(id));
        }
    }
}
