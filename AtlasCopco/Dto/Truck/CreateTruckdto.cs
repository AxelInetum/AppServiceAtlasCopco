using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AtlasCopco.Dto.Truck
{
    public class CreateTruckdto
    {
        public string nombre { get; set; }
        public string marca { get; set; }
        public string modelo { get; set; }
        public string matricula { get; set; }
        public int camionCreado { get; set; }
    }
}
