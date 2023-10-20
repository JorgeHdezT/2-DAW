using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using AUT02_04_CodeFirst_HernandezJorge.Models;

namespace AUT02_04_CodeFirst_HernandezJorge.Data
{
    public class AUT02_04_CodeFirst_HernandezJorgeContext : DbContext
    {
        public AUT02_04_CodeFirst_HernandezJorgeContext (DbContextOptions<AUT02_04_CodeFirst_HernandezJorgeContext> options)
            : base(options)
        {
        }

        public DbSet<AUT02_04_CodeFirst_HernandezJorge.Models.Pokemon> Pokemon { get; set; } = default!;
    }
}
