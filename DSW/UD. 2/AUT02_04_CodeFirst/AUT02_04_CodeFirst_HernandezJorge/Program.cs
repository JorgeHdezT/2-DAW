﻿using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using AUT02_04_CodeFirst_HernandezJorge.Data;
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<AUT02_04_CodeFirst_HernandezJorgeContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("AUT02_04_CodeFirst_HernandezJorgeContext") ?? throw new InvalidOperationException("Connection string 'AUT02_04_CodeFirst_HernandezJorgeContext' not found.")));

// Add services to the container.
builder.Services.AddControllersWithViews();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Pokemons}/{action=Index}/{id?}");

app.Run();
