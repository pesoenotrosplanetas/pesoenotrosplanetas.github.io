var nombre = prompt("Como te llamas?"); //ventana preguntando tu nombre 
				var usuario = prompt("Cuanto pesas?"); //ventana preguntando tu peso
				var planeta = parseInt(prompt("Elige un planeta\n Mercurio = 1, Venus = 2, Luna = 3, Marte = 4, Jupiter = 5, Saturno = 6, Urano = 7, Neptuno = 8")); // ventana pidiendote que eligas un planeta
				var peso = parseFloat(usuario);
				var g_Mercurio = 3.7;
				var g_Venus = 8.87;
				var g_Luna = 1.62;
                var g_Tierra = 9.81;
                var g_Marte = 3.7;                          //declaracion de variables
                var g_Jupiter = 24.8;
                var g_Saturno = 10.44;
                var g_Urano = 8.7;
                var g_Neptuno = 11.5;
                var g_Pluton = 0.62;
               
                var peso_final;
                
                document.write("<strong> Bienvenido(a) " +  nombre  );
                if (planeta == 1)                          //condiciones
                {
					peso_final = peso * g_Mercurio /g_Tierra;
					document.write (" Tu peso en <strong>Mercurio</strong> es de:<strong> " + peso_final + "Kg</strong>");
					peso_final = (peso_final.toFixed(2));
				}
				
				else if (planeta == 2)
                {
                    peso_final = peso * g_Venus / g_Tierra;
                    document.write (" tu peso en <strong>Venus</strong> es de:<strong> " + peso_final + " Kg</strong>");
                    peso_final = (peso_final.toFixed(2));
			    }
				
				else if (planeta == 3)
                {
                    peso_final = peso * g_Luna / g_Tierra;
                    document.write (" tu peso en la <strong>Luna</strong> es de:<strong> " + peso_final + " Kg</strong>");
                    peso_final = (peso_final.toFixed(2));
			    }
			    
			    
                else if (planeta == 4)
                {
                    peso_final = peso * g_Marte / g_Tierra;
                    document.write (" tu peso en <strong>Marte</strong> es de:<strong> " + peso_final + " Kg</strong>");
                    peso_final = (peso_final.toFixed(2));
			    }
			    
			    else if (planeta == 5)
			    {
					peso_final = peso * g_Jupiter / g_Tierra;
					document.write (" tu peso en <strong>Jupiter</strong> es de:<strong> " + peso_final + " Kg</strong>");
					peso_final = (peso_final.toFixed(2));
					
				}
				
				else if (planeta == 6)
                {
                    peso_final = peso * g_Saturno / g_Tierra;
                    document.write (" tu peso en <strong>Saturno</strong> es de:<strong> " + peso_final + " Kg</strong>");
                    peso_final = (peso_final.toFixed(2));
			    }
			    
			    else if (planeta == 7)
                {
                    peso_final = peso * g_Urano / g_Tierra;
                    document.write (" tu peso en <strong>Urano</strong> es de:<strong> " + peso_final + " Kg</strong>");
                    peso_final = (peso_final.toFixed(2));
			    }
			    
			    else if (planeta == 8)
                {
                    peso_final = peso * g_Neptuno / g_Tierra;
                    document.write (" tu peso en <strong>Neptuno</strong> es de:<strong> " + peso_final + " Kg</strong>");
                    peso_final = (peso_final.toFixed(2));
			    }
			    
			    else if (planeta == 9)
                {
                    peso_final = peso * g_Pluton / g_Tierra;
                    document.write (" Pluton no es un planeta pero vive en la infancia de tu humilde servidor asi que me importa un carajo y tu peso en <strong>Pluton</strong> es de:<strong> " + peso_final + " Kg</strong>");
                    peso_final = (peso_final.toFixed(2));
			    }
				else 
				{
					document.write(" <strong>no me toques las pelotas xD!</strong>");
				} 
