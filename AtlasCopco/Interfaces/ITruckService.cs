using AtlasCopco.Dto.Truck;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AtlasCopco.Interfaces
{
    public interface ITruckService
    {
        Task<CreateTruckdto> CreateTruck(CreateTruckdto createTruckdto);
        Task<bool> UpdateTruck(UpdateTruckdto updateTruckdto);
        Task<bool> DeleteTruck(int id);
        Task<List<TrucksDatasDto>> GetListTrucks();
    }
}
