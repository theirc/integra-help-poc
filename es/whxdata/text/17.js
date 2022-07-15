rh._.exports({"0":[[" ","Entrada de diario"]],"1":[[" ","Consulte los siguientes documentos en RescueNet para obtener una lista completa de tipos de diario y su uso:"," ","Tipos de diario en Integra"],[" ","La plantilla DynAd es una herramienta utilizada para cargar en masa entradas de diario en Integra."," ","La plantilla DynAd es especialmente útil cuando Finanzas necesita contabilizar en masa entradas de un libro mayor de una entidad jurídica de Integra a otro. También facilita las contabilizaciones entre diferentes módulos (libros auxiliares) y entre el libro mayor y los módulos, dentro de la misma entidad jurídica de Integra."," "," A/De diferentes libros auxiliares/módulos "," "," A/De libro mayor "," "," A libro mayor de libros auxiliares/módulos "," "," A libros auxiliares/módulos de libro mayor "," ","Regla general:"," utilizar la plantilla DynAd si hay más de 10 entradas de diario que deben cargarse; de lo contrario, crear entradas de diario directamente en Integra."," ","La siguiente tabla es una lista completa de diferentes escenarios de contabilización de/a disponibles con la plantilla DynAd:"," ","Módulo/Cuenta"," ","Módulo/Cuenta de contrapartida"," ","Libro mayor"," ","Proveedor"," ","Libro mayor"," ","Banco"," ","Libro mayor"," ","Libro mayor"," ","Proyecto"," ","Libro mayor"," ","Proyecto"," ","Proveedor"," ","Cliente"," ","Banco"," ","Activos fijos"," ","Libro mayor"," ","Banco"," ","Banco"," ","Proyecto"," ","Banco"," ","Banco"," ","Proveedor"," ","Cliente"," ","Cliente"," ","Proyecto"," ","Cliente"," ","Proyecto"," ","Proyecto"," ","Proveedor"," ","Proveedor"," ","Hay dos plantillas diferentes disponibles para aceptar diferentes divisas:"," ","Plantilla de diario DynAd ","(utilizada para transacciones en divisas base/USD) "," ","Plantilla de diario DynAd Otro importe"," (utilizada para todas las transacciones no realizadas en USD) "," ","La diferencia entre las dos plantillas anteriores es que hay dos columnas adicionales en la versión no en USD/Base para justificar el tipo de tasa de cambio y la tasa de cambio utilizados."],[" ","Al importar de la plantilla DynAd:"," "," La fecha de la transacción determina qué tasa de cambio aplicar, si se reclasifica una entrada del/al periodo actual. "," "," El importe en la divisa de la transacción se convierte utilizando la tasa de Integra y se contabiliza en el campo del importe en divisa base/contable. "," "," Asegúrese de introducir la tasa de cambio como un factor de 100. Por ejemplo, una tasa de cambio introducida como 1,1463 se traducirá a 114,63 en el diario de carga. "," ","De forma adicional, la compensación de divisas también puede realizarse utilizando el diario DynAd. Este suele ser el caso para las cuentas de recepción de efectivo para fondos enviados de HQ, pero recibidos en divisa local."],[" ","Utilizar este procedimiento para crear una entrada de diario directamente en Integra."," ","Este procedimiento debe utilizarse para contabilizarse entradas de diario relacionadas con las nóminas, las empresas vinculadas, acumulaciones, asignaciones prepagadas, anticipos, asignaciones de costes de programas compartidos, proveedores, clientes y entradas de reclasificación."],[" "," Debe conocerse el tipo de diario (consulte el documento Tipos de diarios en Integra para obtener una lista completa de los tipos de diario y su uso). "," "," Las dimensiones financieras se conocen "],[" "," Navegue a través de los módulos ","Libro mayor > Entradas de diario > Diarios generales",". "," "," En el menú de la parte superior, haga clic en ","Nuevo",". "," "," Se añade una nueva fila en la parte superior de la tabla. En el campo ","Nombre",", haga clic en la flecha desplegable y seleccione el tipo de diario correspondiente de la lista de selección, p. ej., JE (comprobante de diario); GL_IC (transacción de empresas vinculadas), etc. "," "," En el campo ","Descripción",", sobrescriba el texto predeterminado con una descripción significativa del diario. "," "," En el menú de la parte superior, haga clic en ","Líneas",". "," "," Valide que una nueva línea de diario se haya añadido a la tabla. (Si no, haga clic en ","Nuevo ","justo sobre la cuadrícula de tabla para añadir una línea.) "," "," Rellene/valide los siguientes campos de la línea de comprobante de diario:  "," ","Campo"," ","Entrada obligatoria"," ","Fecha"," ","Tiene la fecha de hoy predeterminada pero puede sobrescribirse."," ","Comprobante"," ","Este es un número asignado por el sistema y no puede cambiarse. "," ","Empresa"," ","Este valor tiene predeterminada la entidad jurídica a la que está conectada, pero puede sobrescribirse."," ","Si la entrada está relacionada con su entidad jurídica actual, no cambie el código de la empresa."," ","Tipo de cuenta"," ","Si la entrada de diario es una entrada de libro mayor, deje el valor predeterminado ","Libro mayor","."," ","Si la entrada implica otros libros auxiliares/módulos como proyecto, cliente, proveedor, banco o activos fijos, seleccione el libro auxiliar/módulo adecuados de la lista de selección desplegable."," ","Cuenta"," ","La lista de selección desplegable en este campo depende del ","Tipo de cuenta"," seleccionada anteriormente."," "," Si se ha seleccionado el tipo de cuenta Libro mayor, la lista de selección desplegable muestra la cuenta principal y los campos financieros. "," "," Si se ha seleccionado el tipo de cuenta Cliente, la lista de selección desplegable muestra las cuentas de cliente. "," "," Si se ha seleccionado el tipo de cuenta Proveedor, la lista de selección desplegable muestra las cuentas de proveedor. "," "," Si se ha seleccionado el tipo de cuenta Proyecto, la lista de selección desplegable muestra los ID de proyecto. "," "," Si se ha seleccionado el tipo de cuenta Banco, la lista de selección desplegable muestra una lista de cuentas bancarias de la entidad jurídica. "," ","Descripción"," ","Introduzca una descripción significativa para la línea de comprobante de diario."," ","Débito"," ","La cumplimentación de los campos ","Débit/Crédito ","depende del tipo de cuenta seleccionado y la naturaleza de la transacción."," ","Crédito"," ","La cumplimentación de los campos ","Débit/Crédito ","depende del tipo de cuenta seleccionado y la naturaleza de la transacción."," ","Categoría"," ","Este campo solo se muestra si se ha seleccionado ","Proyecto ","en el campo ","Tipo de cuenta","."," ","En el campo ","Categoría",", seleccione la categoría adecuada para su transacción. El ID de proyecto (D1) que se ha introducido en el campo ","Cuenta ","determina las categorías disponibles en la lista, es decir, solo verá aquellas categorías relacionadas con dicho ID de proyecto."," ","Divisa"," ","Deje el valor predeterminado USD si está realizando transacciones en dólares; de lo contrario, actualice a la divisa correspondiente."," ","Tasa de cambio"," ","El campo de tasa de cambio toma automáticamente el valor predeterminado de la tasa de cambio del periodo del sistema de la divisa que ha elegido."," ","Nota",": Para las entradas de reclasificación de divisa, asegúrese de introducir la misma tasa de cambio adjunta a la transacción original en el periodo anterior. Si contabiliza sin la tasa de cambio original y deja el campo en blanco, se aplicará automáticamente la tasa de cambio en el sistema."," "," En el menú justo encima de la tabla, haga clic en ","Dimensiones financieras"," y seleccione ","Cuenta ","de la lista de selección desplegable. "," "," Complete el otro campo de dimensiones requerido basándose en la estructura de cuentas de IRC. Por ejemplo, la transacción de un proyecto requiere un D1-D2-D3-D4-D5-D6. El D7 solo se requiere par salario y beneficios. "],[" "," Cierre la ventana de dimensiones financieras para volver a la pantalla de líneas de comprobante. "," "," Para añadir una línea de contrapartida, haga clic en ","Nuevo ","justo sobre de la cuadrícula de tabla. "," "," Rellene todos los campos obligatorios en la línea de comprobante para la línea de contrapartida. "," "," Para introducir dimensiones financieras para la línea de contrapartida, haga clic en ","Dimensiones financieras"," y seleccione ","Cuenta de contrapartida",". "," "," Complete las dimensiones financieras para la(s) línea(s) de contrapartida. "," "," En el menú de la parte superior de la página, haga clic en ","Validar ","y seleccione ","Simular contabilización",". "," "," Una vez confirmada la simulación de contabilización, cierre la página de Comprobante de diario para volver a la página de Diarios generales. "," "," En la lista de diarios, seleccione el diario que se acaba de crear y adjunte cualquier documentación complementaria. (Haga clic en el icono de sujetapapeles en la esquina superior derecha) "," "," Finalmente, envíe el diario al flujo de trabajo haciendo clic en ","Flujo de trabajo ","en el menú de la parte superior de la página. "],[" ","Ha creado una entrada de diario en Integra."],[" ","Utilizar este procedimiento para crear diarios que solo requieren unas cuantas modificaciones para poderse utilizar en el siguiente periodo contable. Algunos ejemplos utilizados comúnmente son las asignaciones y gastos prepagados."],[" "," Las dimensiones financieras deben conocerse. "],[" "," Navegue a través de los módulos ","Libro mayor > Entradas de diario > Diarios periódicos",". "," "," Haga clic en ","Nuevo ","y seleccione ","PER_JE"," en el campo Nombre. "," "," En el menú de la parte superior, haga clic en ","Líneas",". "," "," En el campo ","Tipo de cuenta",", seleccione la opción correspondiente de la lista de selección desplegable. "," "," En el campo ","Cuenta",", rellene el campo con la entrada correspondiente. "," "," Introduzca una descripción en el campo ","Descripción",". "," "," Introduzca el importe en el campo ","Débito",". "," "," Haga clic en la pestaña ","Dimensiones financieras",". "," "," Complete las dimensiones financieras correspondientes para la línea y haga clic en ","OK",". "," "," Guarde el diario periódico. "],[" ","Ha creado un diario periódico."],[" ","Para acceder al diario periódico que ha creado anteriormente, siga los siguientes pasos:"," "," Vaya a ","Libro mayor > Entradas de diario > Diarios generales",". "," "," Haga clic en ","Nuevo",". "," "," Haga clic en ","Líneas ","en la barra de herramientas superior. "," "," En el menú en la parte superior de la página, haga clic en ","Diario periódico"," y seleccione ","Recuperar diario",". "," "," En la ventana emergente, en el número de diario periódico, seleccione el número del diario periódico que ha creado anteriormente. "," "," En el campo ","Hasta la fecha",", introduzca una fecha. Esta es la fecha en la que se crea el diario. "," "," En el campo de diario ","Copiar o trasladar",", seleccione ","Copiar",". "," "," Haga clic en ","OK",". "," "," Realice todos los cambios necesarios si procede. "," "," Actualice todos los otros campos obligatorios en las líneas de comprobante, p. ej., n.º de factura, dimensiones financieras, etc. "," "," Haga clic en ","Guardar",". "," "," Envíe el diario al ","flujo de trabajo"," para su aprobación. "],[" ","Ha creado una entrada de diario para un diario periódico. Una vez aprobado, Finanzas contabiliza el diario."],[" ","Utilizar este procedimiento para corregir errores en códigos de cuenta principales o dimensiones financieras."," ","Este procedimiento reserva la contabilidad original y recrea nuevas."],[" "," Navegue hasta ","Gestión y contabilidad de proyectos > Proyectos > Todos los proyectos",". "," "," Busque y seleccione la línea de proyecto correspondiente. "," "," En el menú de la parte superior de la página, haga clic en ","Gestionar ","y seleccione ","Transacciones contabilizadas",". "," "," Seleccione la transacción contabilizada que necesita el ajuste y haga clic en ","Ajustar contabilidad"," en la pestaña desplegable ","Procesar",". "," "," Se abre un cuadro de diálogo y muestra las entradas contables actuales en la sección superior del cuadro de diálogo. Revise las entradas actuales. "," "," En la sección inferior, introduzca una nueva cuenta principal y/o dimensiones financieras para recodificar la transacción según se requiera. "," "," Desplácese hacia abajo hasta la parte inferior del cuadro de diálogo. "," "," Haga clic en ","Vista previa ","para asegurare de que todos los valores son correctos y, a continuación, haga clic en ","Contabilizar ","para contabilizar la transacción recodificada. "],[" ","Ha ajustado la contabilidad en una transacción de proyecto contabilizada."],[" ","La recodificación se realiza normalmente para corregir errores en códigos de cuenta principales o dimensiones financieras."," ","El personal de Finanzas realiza esta tarea diariamente o mensualmente."," ","A continuación se describen diversas maneras de realizar la recodificación:"," ","Creando un diario de ajuste de proyecto"," "," Se trata de ajustar las transacciones del proyecto en el libro auxiliar del proyecto que ajustará automáticamente la contabilización del correspondiente libro mayor. "," "," Puede realizar diarios de ajuste de proyectos utilizando la plantilla de diario DynAd para cargar en masa del libro mayor al libro auxiliar del proyecto. "," "," Puede ajustar las transacciones por proyecto. "," "," Puede ajustar por lote. "," ","Introduciendo correcciones de la cuenta en el balance general"," "," Se utiliza principalmente para corregir códigos de cuenta erróneos del libro mayor. "],[" ","Ajustar transacciones de proyecto por proyecto en pasos de Integra:"," "," Navegue hasta ","Gestión y contabilidad de proyectos > Proyectos > Todos los proyectos",". "," "," Haga clic en ","ID de proyecto ","y, en el menú desplegable, busque el ID de proyecto que desea ajustar (seleccione «contiene» para facilitar la búsqueda). "," "," En ","Gestionar > Procesar,"," haga clic en ","Ajustar transacciones",". "," "," En el menú de la parte superior, haga clic en ","Seleccionar",". Aparecerá una ventana emergente. "," "," En la ventana emergente, asegúrese de que el gasto, el artículo y/o la comisión están marcada como Sí en función del tipo de transacción que piensa ajustar. "," "," En ","Fecha de proyecto",", seleccione o escriba ","Desde la fecha"," y ","Hasta la fecha",". Este el intervalo de fechas del que desea extraer su transacción para el ajuste. "," "," En ","Fecha de libro mayor",", seleccione o escriba la fecha. Este es el periodo en el que desea contabilizar el ajuste. "," "," Desplácese hacia abajo para ver el encabezado ","Registros que incluir",". Registros que incluir le ayuda a seleccionar múltiples ID de proyecto que desea ajustar al mismo tiempo. En este punto, no utilizará esta función. "," "," Haga clic en ","OK",". "," "," De la lista de transacciones, seleccione las que desee ajustar. "," "," Haga clic en ","Ajustar",". "," "," En la ventana emergente, en ","ID de proyecto",", escriba el ID de proyecto o código D1 adónde quiere trasladar la transacción. "," "," En el campo ","Categoría",", seleccione la categoría de proyecto adecuada o el código D2 a los que desea ajustar la transacción. "," "," En la ","Propiedad de la línea",", seleccione ","Facturable ","o ","No facturable",". "],[" "," Si desea asignar múltiples códigos D1, inserte líneas adicionales y cambie la columna de porcentaje a la clave de asignación adecuada. De lo contrario, déjelo en 100. "," "," En el campo ","Código de empleado",", escriba el código D7 de empleado. Este solo se requiere si está ajustando transacciones relacionadas con el personal. "," "," En el campo ","Código de motivo",", seleccione el código correspondiente par su ajuste. "," "," En el campo ","Comentario de motivo",", puede sobrescribir la entrada predeterminada y escribir los comentarios adicionales para el ajuste. "," "," Haga clic en ","OK",". "," ","Verá una pantalla dividida que muestra las transacciones que está ajustando en la parte inferior."," ","En la parte superior de dichas transacciones que desea ajustar, puede verificar las dimensiones financieras. Las dimensiones financieras se rellenarán automáticamente basándose en la codificación previa. Por consiguiente, puede modificar las dimensiones financieras como corresponde para cada línea."," "," Haga clic en ","Contabilizar"," en el menú de la parte superior de la página. "," "," Haga clic en ","OK"," en la ventana que se abre. "],[" ","Ha recodificado una entrada de GL."],[" ","Utilizar este procedimiento para revertir una entrada de libro mayor (GL) en Integra."," ","Las reversiones pueden utilizarse para revertir entradas erróneas en el GL y para codificarlas de forma correcta posteriormente."],[" "," Después de ejecutar el saldo de prueba (véase más arriba), haga doble clic en la transacción, en la columna ","Balance de cierre"," que debe revertirse. "," "," Haga clic en ","Revertir transacción",". "," "," En la pantalla ","Reversión de transacción",", introduzca la ","Fecha de contabilización de reversión",". "," "," Haga clic en ","OK",". "," ","Aparecerá un mensaje que indica que la transacción se ha revertido."," "," Haga clic en ","Seguimiento invertido",". Se mostrarán las transacciones original y revertida. "],[" "," Cierre la transacción seleccionando ","X"," en la parte superior derecha de la pantalla cuando la revisión se haya completado. "],[" ","La transacción de GL se ha revertido."],[" ","Utilizar este procedimiento para rellenar la plantilla DynAd para cargar transacciones en masa en diversos módulos de Integra."],[" "," Recupere la versión más actualizada de la plantilla DynAd de Box. "," "," Lea atentamente todas las instrucciones siguientes insertadas en la misma plantilla DynAd. "," "," Instrucciones específicas de campos en la sección de encabezado de la plantilla "," "," Instrucciones específicas de columnas para cada línea de entrada de diario "," "," Rellene la plantilla DynAd con entradas de diario. "],[" ","Utilizar este procedimiento para cargar la plantilla DynAd en Integra. La función de carga crea un diario en Integra."],[" "," La plantilla DynAd debe haberse rellenado y guardada en una unidad local/compartida. "," "," El usuario debe saber cómo añadir/trasladar columnas en una cuadrícula de tabla. Para obtener orientación, consulte el procedimiento ","Personalizar diseños de cuadrícula de tabla",".  "],[" "," Navegue a través de los módulos ","Libro mayor > Espacios de trabajo > Importación de diario DynAd",". "],[" "," Seleccione el icono a la izquierda etiquetado como ","Importar transacciones de diarios",". "," "," Accione los siguientes campos/botones: "," ","Campo/Botón"," ","Entrada obligatoria"," ","Grupo de procesamiento"," ","Seleccione "," Cargar DynAD"," de la lista de selección desplegable."," ","Ejecutar en modo lote"," ","Haga clic en el botón para que muestre ",".  "," ","Habilitar subprocesos múltiples para lote"," ","Haga clic en el botón para que muestre "," ","Examinar"," ","Haga clic en ","Examinar ","para seleccionar el archivo de carga."," ","Cargar"," ","Una vez se ha seleccionado y mostrado el archivo, haga clic en ","Cargar","."," ","OK"," ","Haga clic en "," para continuar y ver los resultados de importación."," "," Valide el mensaje «Importación por lotes programada….» que se muestra. "," "," Espere hasta que el sistema procese el diario. Aparecerá un registro de información en la esquina superior derecha de la pantalla una vez que se haya completado la importación de diario DynAd. "," "," Cierre todos los mensajes. "," "," En el menú de opciones a la izquierda de la cuadrícula de resultados, seleccione ","Importar resultados",". "," "," Localice el archivo de carga correspondiente y vea el estado de carga en la columna ","Estadísticas de resumen de ejecución",". "],[" "," Determine el siguiente paso:\n      "," "," Si el estado es ","Correcto",", vuelva al menú ","Todos ","y continúe realizando las simulaciones de contabilización y/o contabilización según la nota descrita en el paso 1 anterior. "," "," Si el estado que se muestra ","Fallido ","o ","Parcialmente correcto",", vaya al siguiente paso para investigar los problemas. "," "," Seleccione la línea de importación en el menú sobre la cuadrícula, haga clic en ","Detalles de ejecución",". "," "," Revise el símbolo de estado que se muestra en la página\n      "," "," Marca de verificación verde = la carga ha sido correcta. "," "," Círculo rojo con una cruz roja = la carga ha fallado "," "," Triángulo con un signo de exclamación = la carga ha sido parcialmente correcta "," "," Revise la información en la sección ","Estado de procesamiento de la entidad",": "," "," La columna ","Pendiente ","muestra el número de registros en la carga que requieren modificación. "," "," La columna ","Ubicación provisional"," muestra el número de registros cargados correctamente. "," "," Haga clic en ","Ver datos de ubicación provisional"," para ver los detalles de los errores en las líneas de diario. "," "," En el menú de la parte superior de la página, haga clic en ","Validar todo ","para ver los mensajes de error detallados. "," "," Añada la columna ","Mensaje de error"," a la tabla y desplácela hasta una ubicación adecuada/visible en la cuadrícula. "," "," Revise la cuadrícula para determinar las líneas completadas y las líneas con errores. "," "," Haga clic en ","Editar ","para habilitar la edición/corrección de las líneas en la cuadrícula. Corrija todas las líneas que tienen estado  ","Ubicación provisional a destino ","de ","Error ","hasta que se hayan corregido todas las líneas. "],[" "," Haga clic en ","Guardar",". "," "," Haga clic en ","Validar todo ","para validar las líneas después de las modificaciones. "," "," Haga clic en ","Copiar datos a destino"," para copiar los datos corregidos al diario asociado. "," "," En el formulario"," Seleccionar un ID de trabajo para ejecutar",", seleccione ","Criterios ","en el campo ","Ejecutar para",". "],[" "," Haga clic en ","OK",". "," "," Revise los datos en la cuadrícula ","Ejecución de datos de destino",". "," "," Haga clic en la ","X"," para cerrar y volver a la vista de resumen de Ejecución. "],[" ","Ha cargado la plantilla DynAd en Integra."],[" ","Para reclasificar entradas de un proyecto a otro, IRC utiliza normalmente ajustes de proyecto, específicamente para cualquier entrada de reclasificación que registra un gasto de ARTÍCULO de un proyecto a otro. Este ajuste de proyecto se ha personalizado para que incluya códigos de motivo y el usuario puede seguir estos ajustes hasta la transacción del proyecto original. El diario DynAd no tiene esta capacidad."," ","Para la reclasificación de cantidades de una cuenta de balance general a otra, y para el registro y recodificación de empresas vinculadas, se utiliza el diario DynAd."," ","Cuando se recodifican los cargos GASTO y COMISIÓN, también puede utilizarse el diario DynAd."," ","Si está reclasificando una transacción en divisa extranjeras dentro del mismo periodo contable, no tendrá que «forzar» la tasa de cambio."],[" ","Durante el periodo provisional, el proceso de reclasificación de entradas de meses anteriores cumplirá lo siguiente:"," "," Todas las entradas de fechas anteriores, tanto si son transacciones de reclasificación o de liquidación de empresas vinculadas, se contabilizan con la fecha del sistema del mes actual en Integra.   "," "," El campo ","Fecha de documento"," se utiliza para rastrear la fecha original de las transacciones.  Para las entradas que se originan en un periodo anterior, pero que se contabilizaron o reclasificaron originalmente utilizando la fecha del sistema del periodo actual, el campo de fecha de documento debe rellenarse con la fecha de la transacción original. "," "," El archivo SAF de la oficina del país de cargará en ISUN con la fecha de la transacción y la fecha del documento. "," "," Si la fecha de la transacción de la entrada del archivo SAF está dentro del mes actual, la fecha de la transacción y la fecha del documento del sistema será la misma fecha. "," "," Si en la fecha de la transacción en el archivo SAF hay una fecha de periodo anterior, las entradas se contabilizarán utilizando la fecha del sistema del periodo actual y el campo de fecha del documento tendrá la fecha original de la transacción. "],[" ","Utilizar este procedimiento para ver los diferentes tipos de diario en Integra."],[" ","El usuario debe entender el uso de los diferentes tipos de diario en Integra para poder contabilizar la transacción eligiendo las opciones de diario adecuadas y rellenando todos los campos de diario obligatorios en Integra."],[" "," Navegue a través de los módulos ","Libro mayor > Configuración de diario > Nombres de diario",". "," "," Revise la lista de nombres de diario en la pestaña de la izquierda. "],[" ","Ha visto una lista completa de todos los nombres de diario en Integra."],[" ","La herramienta de conector de datos proporciona un método alternativo para la entrada de diario solo cuando no hay transacciones de proyecto. Utilice la versión más reciente de la plantilla de diario DynAd (descargue la versión más reciente de la carpeta maestra de IRC en Box)."],[" "," Asegúrese de que los datos estén listos en Excel antes de continuar. "," "," Navegue a través de los módulos ","Libro mayor > Entradas de diario > Diarios generales",". "," "," Haga clic en ","Nuevo ","después de seleccionar el nombre de diario adecuado, por ejemplo «","JE","». "," "," Haga clic en el icono de Microsoft (esquina superior derecha) y seleccione ","Entrada de línea de diario general",". "," "," En la ventana que se abre, haga clic en ","Descargar",". "," "," Abra el archivo descargado en Excel. "," "," Espere para ejecutarlo hasta que aparezca un mensaje emergente. "," "," Haga clic en ","Sí ","cuando se solicite para confirmar la actualización. . Se producirá un procedimiento adicional, y su diario estará listo para rellenarse. "," "," En la columna ","AG",", coloque el puntero sobre la línea azul y arrástrela hacia abajo hasta el número esperado de líneas en el diario. Las dos instantáneas mostrarán cómo ha cambiado la columna AG. "," "," Complete las ","dimensiones financieras"," basándose en la estructura de cuentas de IRC. "," "," Después de rellenar el archivo, haga clic en ","Publicar",". "," ","El archivo se ejecutará y mostrará los datos actualizados en la parte inferior de la pantalla."," "," Vuelva a Integra, en ","Libro mayor > Entradas de diario > Diarios generales"," y haga clic en ","Mostrar solo creados por usuario"," para localizar el diario. "," "," Siga los mismos pasos para adjuntar documentos y enviarlos al flujo de trabajo como se ha explicado para el diario DynAd y las Entradas de diario directas en Integra. "],[" ","El archivo debería haberse importado correctamente, y el diario puede revisarse, validarse y contabilizarse."," ","rescuenet.rescue.org/i/integra-support"]],"2":[[" ","Descripción general de los procesos empresariales"]],"3":[[" ","Diagramas de flujo de procesos"," ","Tipos de diario en Integra"],[" ","Plantilla DynAd"],[" ","Procesamiento de entradas de diario en divisa extranjera"],[" ","Crear una entrada de diario en Integra"],[" ","Crear un diario periódico"],[" ","Crear un entrada de diario desde un diario periódico"],[" ","Ajustar la contabilidad en una transacción de proyecto contabilizada (método sencillo)"],[" ","Recodificar una entrada de diario"],[" ","Revertir una entrada de libro mayor (después de un saldo de prueba)"],[" ","Rellenar la plantilla DynAd"],[" ","Cargar la plantilla DynAd completada en Integra"],[" ","Apéndice"," ","Reclasificación de transacción de divisa base y extranjera"],[" ","Reclasificación de entradas de periodos anteriores (periodo provisional)"],[" ","Visualización de tipos de diario en Integra"],[" ","Uso del conector de datos en Excel para editar/cargar líneas de diario"]],"4":[[" ","Objetivo"],[" ","Requisitos previos"],[" ","Pasos"],[" ","Resultado"],[" ","Objetivo"],[" ","Requisitos previos"],[" ","Pasos"],[" ","Resultado"],[" ","Resultado"],[" ","Pasos"],[" ","Resultado"],[" ","Pasos"],[" ","Resultado"],[" ","Pasos"],[" ","Resultado"],[" ","Objetivo"],[" ","Pasos"],[" ","Objetivo"],[" ","Requisitos previos"],[" ","Pasos"],[" ","Resultado"],[" ","Objetivo"],[" ","Requisitos previos"],[" ","Pasos"],[" ","Resultado"],[" ","Pasos"],[" ","Resultado"]],"5":[[" ","Nota",": ","Solo se utiliza una cuenta para las filiales. ","Todas las filiales con cargos deben enumerarse como 786500.0.e para la categoría de proyecto D2."],[" ","Nota",": ","Para los diarios periódicos que tienen más de diez líneas, utilice la plantilla DynAd para cargar líneas de diario. ","Consulte las instrucciones descritas en el artículo Plantilla DynAd de esta sección."],[" ","Notas",": "," "," Facturable es solo para proyectos con comisión (ICR) y que requieren reconocimiento de ingresos como subvenciones y contratos o restringidos. "," "," No facturable se utiliza para proyectos que no requieren reconocimiento de ingresos como proyectos no restringidos y temporalmente restringidos."],[" ","IMPORTANTE",": ","Solo las transacciones de libro mayor pueden revertirse. ","Cualquier transacción que haya sido contabilizada desde un libro auxiliar no puede revertirse en el Libro mayor."],[" ","Importante",": ","No cambie ninguna información en ninguno de los encabezados de columna de la plantilla DynAd. ","Si se realiza algún cambio, la carga a integrá fallará."],[" ","Nota",": ","Para los archivos que se han cargado correctamente (sin errores), las opciones para ","Simular contabilización"," y ","Simulate contabilización en lote ","están disponibles en el menú ","Validar ","de la cuadrícula de resultados ","Historial e importación",". ","También existe la opción de ","contabilizar ","archivos de importación de diarios desde esta cuadrícula. ","De forma alternativa, el diario puede contabilizarse a través de la ruta de navegación, ","Libro mayor > Entradas de diario > Diarios generales","."],[" ","Consejos",": "," "," - Filtre con su nombre en el campo ","ID de usuario"," para mostrar solo los archivos que ha cargado usted. "," "," - Para eliminar un archivo de carga, seleccione la línea y haga clic en Eliminar."],[" ","Nota",": ","Todos los errores de los datos pueden corregirse en la plantilla DynAd MS Excel original y, a continuación, volver a cargar los datos sin errores en Integra. ","Utilice la función Exportar a Excel accesible a través de la barra de herramientas en la esquina superior derecha de la página."],[" ","Importante",": ","La solución provisional es seleccionar ","Todos ","en el campo ","Ejecutar para"," ya que hay un problema técnico con la selección de Criterios por el cual las líneas no se rellenan en el diario (desde el 16 de diciembre de 2020)."],[" ","Nota",": ","Solo se utiliza para cargar diarios que","NO"," tienen transacciones de proyecto. ","Este proceso hace referencia principalmente a cuentas de balance general o cuentas de gastos/ingresos que no tocan el módulo Proyectos."]],"id":"17"})