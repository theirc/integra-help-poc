rh._.exports({"0":[[" ","Previsión de artículos para la creación de pedidos (CRRD)"]],"1":[[" "," CRRD utiliza la previsión de artículos para toda la planificación de adquisición relacionada con el proyecto. "," "," Cada proyecto tiene su propia previsión de artículos. "," "," Se requiere un línea de previsión de artículos para cada producto (artículos y servicios) que IRC espera adquirir y distribuir durante la vida de un proyecto. "," "," Después de la primera carga de la versión en Excel de la previsión de artículos en Integra, los cambios en curso se realizan directamente en Integra. "," "," La previsión de artículos es un «documento abierto»; Programas y Cadena de suministro crean y mantienen este documento en colaboración. "],[" ","Independientemente de la etapa de aprobación de una propuesta/un proyecto, los pasos para rellenar la Plantilla de previsión de artículos son los mismos; la diferencia reside en «cuándo» lo realiza."," ","Propuesta enviada a un donante y a la espera de la aprobación del proyecto (muy probable)"," "," Notificación o carta de intención por escrito recibida del donante "," "," Se aplica a proyectos de continuación que se renuevan anualmente (en los que se asigna un nuevo D1 cada año)\n        "," "," Podría ser potencialmente un proyecto de no continuación en el que el donante ha proporcionado notificación verbal. "," "," Se asigna un ID de proyecto/D1, pero no se puede empezar a gastar hasta que se haya recibido la aprobación de la financiación del donante y/o IRC (y el proyecto se haya activado en Integra). "," ","El donante ha aprobado la concesión"," "," Puede haber recibido o no acuerdo de concesión "],[" ","A continuación se describen los pasos clave de la previsión de artículos hasta la creación de requerimientos de artículo. Las funciones responsables de cada paso se indican sobre el número del paso."],[" "," Antes de crear un pedido (PO), Cadena de suministro debe validar que no hay suficiente cantidad disponible","*"," (reservada para el proyecto) para satisfacer la cantidad del requerimiento del artículo. ","*"," "," Cadena de suministro asigna un proveedor a cada línea de pedido de venta y crea los PO desde las líneas de pedido de venta. (El sistema Integra genera automáticamente una línea de pedido de venta para cada línea de requerimiento de artículo). "," ","*"," Si hay exceso de inventario de un artículo que se necesita en otro proyecto, se puede cancelar la reserva de estos artículos en el proyecto con exceso de inventario y transferirse al proyecto que necesita los artículos."," "," Para obtener las instrucciones para transferir inventario de un proyecto a otro, consulte la sección Gestión del inventario (CRRD). "],[" ","Los siguientes artículos se adquieren con solicitudes de compra, no con la previsión de artículos."," "," Activos fijos capitalizados "," "," Artículos con fondos no restringidos "," "," Costes de programa compartidos. "," ","Para obtener instrucciones sobre cómo procesar este tipo de compras, consulte las siguientes secciones:"," ","Adquisición para confirmar (PR-PO)"," ","Gestión de activos fijos"],[" ","Utilizar este procedimiento para recuperar y rellenar la plantilla de previsión de artículos (en formato Excel)."],[" "," El proyecto debe haberse aprobado o debe ser «muy probable» que se apruebe. "," "," La Alta Dirección debe haber dado el «visto bueno» para comenzar a rellenar la plantilla. "," "," Debe haber disponible una copia del presupuesto con las dimensiones financieras correctas. "],[" "," Recupere la plantilla de previsión de artículos más actual de Box. "," "," Rellene todas las columnas obligatorias en la hoja tituladas ","Previsiones de artículos",". "," ","Aspectos importantes que recordar al rellenar la plantilla:"," "," Un usuario debe recuperar siempre la versión más reciente de la plantilla de previsión de artículos. "," "," Si hay múltiples fechas «Requerido por» para un producto dado, se crea una línea de previsión de artículos para cada «Requerido por fecha» diferente. "," "," Si hay múltiples combinaciones de valores de dimensiones financieras para un producto dado, debe crearse una línea de previsión de artículos para cada combinación diferente de valores de dimensiones financieras. "," "," Utilice las listas de selección desplegables para seleccionar datos, si están disponibles. "," "," El campo ","Nombre de producto"," contiene un máximo de 100 caracteres. Si se requieren más de 100 caracteres, introduzca la descripción completa en la columna ","Descripción ",". "," ","Puede modificar la columna «Precio» para que refleje su precio estimado más reciente para el producto (el equipo de Cadena de suministro puede ofrecer orientación sobre el precio estimado)"," ","No cambie el valor predeterminado en el ","campo"," Unidad de medida de ventas."," ","Si no se conoce el número de artículo, introduzca ","999999999"," como marcador de posición de presupuesto.","*"," ","Seleccione ","999999999"," en el campo ID de producto."," ","Escriba una descripción en el ","campo"," Descripción."," ","Introduzca la unidad de medida y precio y otra información obligatoria."," ","Pida a sus compañeros de Cadena de suministro que soliciten la creación del nuevo producto  "," ","No pueden crearse requerimientos para el artículo 999999999, por lo que este campo necesita actualizarse en un momento dado con el ID de producto real (o múltiples ID de producto en caso necesario)."," ","*  ","De forma alternativa, deje esta línea fuera de la plantilla Previsión de artículos hasta el momento en el que haya un número de productos disponible O el personal de Programa tenga información más específica de los productos que desean adquirir."," ","La convención de nomenclatura para realizar una carga correcta es ","Previsión de artículos","[ID de proyecto]_[entidad informadora]",". "," ","Algunos ejemplos son: "," «Previsión de artículos DF119_2SLE», «Previsión de artículos DF129_2KEN»"," ","Se han desarrollado convenciones de nomenclatura estandarizadas para los productos con el fin de facilitar la búsqueda y la elaboración de informes de forma uniforme.  "," ","La creación y actualización de la previsión de artículos normalmente es un proceso iterativo, lo que significa que evolucionará a medida que se identifiquen más detalles sobre las necesidades de adquisición"],[" ","La plantilla de previsión de artículos se ha completado y está lista para cargarse en Integra."],[" ","Utilizar este procedimiento para cargar la previsión de artículos completada en Integra."," ","Cadena de suministro realiza este procedimiento."],[" "," Todos los campos obligatorios de la plantilla deben haberse rellenado correctamente "," "," La plantilla debe estar guardada en la unidad local "," "," El proyecto debe existir en Integra "," "," El archivo de la plantilla debe tener un nombre correcto para que pueda cargarse, es decir, con un sufijo de la entidad informadora.\n        "," "," P. ej., «Previsión de artículos DF119_2SLE», «Previsión de artículos DF129_2KEN» "],[" "," Abra la página de Box de destino. "," "," Copie/cargue el archivo en la ubicación de Box según los procedimientos de carga en Box estándar. "," "," Copie/cargue la plantilla completada en el archivo de Box de destino. "," "," Importación previsión artículos ABC_2KEN "," "," Verifique que la plantilla se haya cargado correctamente en Integra. "," "," Al cabo de unos minutos, verifique que el archivo haya desparecido de la ubicación de Box. Esto indicará que el archivo se ha cargado en Integra. "," "," Se enviará un correo electrónico similar al que se muestra a continuación indicando que la carga se ha realizado correctamente. (Y, del mismo, modo si ha fallado.) "],[" ","La previsión de artículos se ha cargado en Integra, en el módulo de Gestión de proyectos y contabilidad."],[" ","Cadena de suministro valida las líneas de previsión de artículos cargadas contrastando con la tabla de restricciones del donante."],[" ","Utilizar este procedimiento para validar las líneas de previsión de artículos cargadas contrastando con la tabla de restricciones del donante."],[" "," La plantilla de previsión de artículos debe haberse cargado en Integra o debe haberse añadido manualmente una línea nueva. "],[" "," Navegue a través de los módulos ","Gestión y contabilidad de proyectos > Todos los proyectos",". "," "," Busque y abra el formulario del proyecto de destino. "," "," En el menú de la parte superior del formulario del proyecto, haga clic en ","Plan",". "," "," En la pestaña desplegable ","Previsión",", haga clic en ","Previsiones de artículos",". "," "," En el menú sobre la cuadrícula de tabla, haga clic en ","Validar líneas",". "," "," Revise los mensajes de restricciones del donante y aplique las medidas adecuadas. "," ","Notas: "," "," Las líneas con problemas muestran una X roja o un signo de exclamación amarillo debajo de la columna de verificación Validación. "," "," Si hay restricciones, se mostrará uno de los siguientes dos mensajes en la parte superior de la página. "],[" ","Ha validad las líneas de previsión de artículos contrastando con la tabla de restricciones del donante."],[" ","Utilizar este procedimiento para aprobar las líneas de previsión de artículos. Esta acción representa una aprobación para continuar con la adquisición del artículo o servicio."," "," Programas debe hacer clic en ","Flujo de trabajo > Enviar"," para activar la aprobación. Al cabo de un periodo de tiempo breve (normalmente menos de un minuto), el sistema aprueba la línea automáticamente siempre que las líneas se hayan validado sin errores. "," "," Una vez aprobada una línea de previsión de artículos, se crea una línea de requerimiento de artículo en el proyecto. "],[" "," El estado de la línea de previsión de artículos debe ser «Borrador». "," "," Las líneas con estado Borrador deben haberse validado sin errores. "," "," Todas las líneas de marcador de posición deben haberse eliminado. "],[" "," Navegue a través de los módulos ","Gestión y contabilidad de proyectos > Todos los proyectos",". "," "," Busque y abra el formulario del proyecto de destino. "," "," En el menú de la parte superior del formulario del proyecto, haga clic en ","Plan",". "," "," En la pestaña desplegable ","Previsión",", haga clic en ","Previsiones de artículos",". "],[" "," Haga clic en el círculo de selección junto a la líneas que requieren aprobación. Pueden seleccionarse múltiples líneas a la vez. "],[" "," En el menú de la parte superior de la página, haga clic en los tres puntos y seleccione ","Flujo de trabajo > Enviar",". "],[" "," Confirme que el estado de las líneas ha cambiado a ","En revisión",". "],[" "," Confirme que el estado de la(s) línea(s) de previsión de artículos haya cambiado a ","Aprobado",". "],[" ","Ha aprobado una o varias líneas de previsión de artículos y se han creado requerimientos de artículos para cada línea aprobada para que Cadena de suministro las procese posteriormente."],[" ","Utilizar este procedimiento para añadir manualmente una línea a la previsión de artículos en Integra."],[" "," Debe haberse verificado que no exista ya una línea de previsión de artículos para el requerimiento. "," "," Las dimensiones financieras deben conocerse. "],[" "," Navegue a través de los módulos ","Gestión y contabilidad de proyectos > Todos los proyectos",". "," "," Busque y abra el formulario del proyecto de destino. "," "," En el menú de la parte superior del formulario del proyecto, haga clic en ","Plan",". "," "," En la pestaña desplegable ","Previsión",", haga clic en ","Previsiones de artículos",". "],[" ","Consejos de navegación:"," "," Para ver más líneas de previsión de artículos, arrastre las barras dobles hacia abajo para expandir la vista. "," "," Oculte columnas ajenas haciendo clic con el botón derecho en el encabezado de la columna y seleccionando ","Ocultar esta columna",". Guarde cualquier cambio en el diseño como una vista personalizada. "," "," Para añadir una nueva línea de previsión de artículos, en el menú de la parte superior de la página, haga clic en ","Nuevo",". "," ","Se añade una nueva línea con estado Borrador a la tabla."," "," Rellene los siguientes campos para la nueva línea de previsión de artículos: "," ","Campo"," ","Entrada obligatoria"," ","Modelo"," ","Asegúrese que ","Obligatorio ","esté predeterminado en este campo. Si no, selecciónelo de la lista de selección desplegable."," ","Fecha de recepción solicitada "," ","Seleccione la fecha en la que el artículo necesita recibirse en el inventario de IRC."," ","Fecha de envío solicitada"," ","Seleccione la fecha en la que el artículo se distribuirá a los beneficiarios."," ","Número de artículo"," ","Introduzca el número de producto par el artículo o servicio."," ","Si no conoce el número, haga clic en el menú desplegable para realizar una búsqueda y filtrar por «Nombre de producto». "," Si el producto requerido no puede encontrarse, pida a su Cadena de suministro que le ayude o solicite la creación del nuevo producto"," ","Si la información que hay predeterminada en el campo Nombre de producto no incluye suficiente detalle, añada más información en el ","campo"," Texto debajo de la ","pestaña ","General."," ","Sitio"," ","Seleccione el sitio correspondiente de la lista de selección desplegable."," ","Almacén"," ","Seleccione el almacén de almacenamiento de destino."," ","Cantidad de ventas"," ","Introduzca la cantidad de pedido requerida."," ","Precio de coste"," ","Introduzca el precio del artículo/servicio, si no hay ninguno predeterminado."," ","Precio de venta"," ","Introduzca o verifique que el precio de venta sea correcto. Consulte con Finanzas el precio de venta correcto."," "," Haga clic en la pestaña ","Proyecto",". "," "," En el campo ","Categoría",", introduzca/seleccione la categoría de proyecto correcta para el artículo/servicio. "," "," En el menú de la parte superior, haga clic en ","Guardar",". Esta acción copiará el valor de la categoría de proyecto en la subsiguiente categoría de proyecto (dimensión financiera D2). "," "," Haga clic en la pestaña ","Dimensiones de inventario","."," "," En el campo ","Ubicación",", haga clic en la flecha desplegable y seleccione la ubicación correspondiente. "],[" "," Haga clic en la pestaña ","Dimensiones financieras",". "," "," Valide/complete todas las dimensiones financieras requeridas para la línea de previsión de artículos. "," "," Los campos ID de proyecto (D1), Categoría de proyecto (D2) y Entidad informadora (D5) deben tener los valores predeterminados basados en las entradas anteriores. "," "," Rellene los campos de Área de programa (D3), Unidad de operaciones (D4) y Área funcional (D6). "," "," Haga clic en la pestaña ","Descripción general ","para volver a la lista de líneas de previsión de artículos. "," "," En el menú de la parte superior de la página, haga clic en ","Guardar",". "],[" ","Ha creado un borrador de línea de previsión de artículos directamente en Integra."],[" ","Programas debe aprobar la(s) línea(s) de previsión de artículos. Consulte el procedimiento ","Aprobar líneas de previsión de artículos"," para obtener orientación."],[" ","Utilizar este procedimiento para realizar actualizaciones a la previsión de artículos después de la carga inicial de la plantilla de Excel."," ","Puesto que IRC carga la previsión de artículos al comienzo de un proyecto, es probable que necesiten realizarse cambios. P. ej., dividir líneas de previsión de artículos, cambiar la cantidad, eliminar líneas, etc."],[" "," La plantilla de previsión de artículos debe haberse cargado en Integra. "," "," El estado de la(s) línea(s) de previsión de artículos debe ser «Borrador». "],[" "," Navegue a través de los módulos ","Gestión y contabilidad de proyectos > Todos los proyectos",". "," "," Busque y abra el formulario del proyecto de destino. "," "," En el menú de la parte superior del formulario del proyecto, haga clic en ","Plan",". "," "," En la pestaña desplegable ","Previsión",", haga clic en ","Previsiones de artículos",". "," "," Realice las actualizaciones necesarias en las líneas de previsión de artículos. "," "," Guarde los cambios. "],[" ","Ha actualizado la previsión de artículos en Integra."],[" ","Utilizar este procedimiento para ver cantidades de inventario disponible."],[" "," El artículo debe estar configurado como un artículo de inventario en Integra. "],[" "," Desde la página de inicio de Integra, navegue a través de los módulos ","Gestión del inventario > Consultas e informes > Lista disponible",". "," "," Aplique alguno o todos los siguientes filtros seleccionando la lista desplegable para obtener más opciones de filtrado:\n        "," "," Número de artículo "," "," Sitio "," "," Almacén "," "," ID de proyecto "],[" "," Haga clic en ","Dimensiones ","en el menú de la parte superior de la página para añadir valores de dimensiones de inventario adicionales a la pantalla de consulta disponible. "," "," Seleccione el cuadro junto a todas las dimensiones correspondientes para mostrar. P. ej., Sitio, Almacén, Ubicación, ID de proyecto y Número de artículo. "," "," Haga clic en ","OK ","para continuar. "," "," Haga clic en ","Aplicar ","en el panel ","Filtros ","del lado izquierdo para recuperar los resultados. "," "," Revise los resultados del inventario disponible mostrado en la cuadrícula ","Disponible",". "],[" "," Haga clic en la ","X"," para cerrar el informe","Inventario disponible"," una vez completada la revisión. "],[" ","Ha visto las cantidades de inventario disponible."],[" ","Utilizar este procedimiento para revisar o actualizar los requerimientos de artículos que se han generado a partir de las líneas de previsión de artículos liberadas."],[" ","Programas debe haber liberado la línea de previsión de artículos."],[" "," Navegue a través de los módulos ","Gestión de proyectos y contabilidad > Proyectos > Todos los proyectos",". "," "," Busque y abra el formulario del proyecto de destino. "," "," En el menú de la parte superior del formulario del proyecto, haga clic en ","Plan",". "," "," En la pestaña desplegable ","Requerimientos de artículo",", haga clic en"," Requerimientos de artículo",". "," "," Revise la lista de requerimientos de artículos para el proyecto. "],[" "," Haga clic en ","Editar ","para actualizar las líneas de requerimientos de artículos en caso necesario. "],[" ","Ha revisado los requerimientos de artículos para un proyecto."," ","Se ha creado una línea de pedido de venta para cada línea de requerimiento de artículo."],[" ","Utilizar este procedimiento para crear pedidos para artículos/servicios que son parte de la previsión de artículos."],[" "," Cadena de suministro debe haber confirmado que no hay suficiente stock disponible para satisfacer la cantidad del requerimiento del artículo. Para obtener instrucciones sobre cómo ver el inventario disponible, consulte la guía de usuario de formación, Gestión del inventario. "],[" "," Navegue a través de los módulos ","Gestión de proyectos y contabilidad > Proyectos > Todos los proyectos",". "," "," Busque y abra el proyecto de destino. "," "," En el menú de la parte superior del formulario del proyecto, haga clic en ","Plan",". "," "," En el panel de acciones, haga clic en ","Requerimientos de artículo",". "," "," En el menú de la parte superior de la página, haga clic en ","Gestionar",". "," "," Haga clic en ","Consultas ","y seleccione ","Pedido de venta"," de la lista de selección desplegable. "," "," Anote o copie el número de pedido de venta. "," "," Navegue a través de los módulos ","Adquisiciones y abastecimiento > Pedidos > Todos los pedidos."," "," En el menú de la parte superior de la página, haga clic en","Pedido",". "," "," En el panel de acciones ","Nuevo",", haga clic en ","Desde un pedido de venta",". "," "," En la sección ","Líneas",", haga clic en ","Seleccionar",". "," "," En la fila que muestra ","Pedido de venta",", introduzca el número de pedido de venta en el campo ","Criterios",". "," "," Haga clic en ","OK ","para continuar. "," "," Seleccione la casilla de verificación en la columna ","Incluir ","para el artículo/servicio que se va adquirir. "," "," En el campo ","Cuenta de proveedor",", introduzca el número de proveedor desde cual se comprará el artículo/servicio. "," "," Haga clic en ","OK"," para continuar. "," "," Haga clic en el número de PO que se acaba de crear para abrir el formulario de PO. "],[" "," Haga clic en la pestaña ","Encabezado"," y desplácese hacia abajo hasta la sección Configuración del encabezado. "," "," En el menú de la parte superior de la página, haga clic en ","Editar",". "," "," En el campo ","Solicitante",", introduzca el nombre del solicitante. "],[" "," En el menú de la parte superior de la página, haga clic en ","Flujo de trabajo ","y envíe el PO para su aprobación. "," "," Una vez aprobado, confirme y transmita el PO al proveedor. Consulte el procedimiento en esta guía de usuario titulado Confirma PO y transmitirlo al proveedor. "],[" ","Ha creado un PO para un servicio/artículo identificado en la previsión de artículos."],[" ","Utilizar este procedimiento para enviar un PO para su aprobación."," ","Si la entrega inicial se va a realizar a una ubicación distinta a la ubicación de almacén final, p. ej., un punto de entrada, actualice el campo de dirección de entrega para que refleje la ubicación de entrega e incluya una nota indicando que los artículos deben transferirse del punto de entrada a la ubicación de almacén final."],[" "," El PO debe tener el estado «Borrador». "],[" "," Desde la página de inicio de Integra, navegue a través de los módulos ","Adquisiciones y abastecimiento > Pedidos > Todos los pedidos",". "],[" "," Localice y haga clic en el número de PO correspondiente para abrir el formulario de PO. "],[" "," Verifique que los siguientes campos en cada línea sean precisos y estén completos. "," ","Campo"," ","Entrada obligatoria"," ","Número de artículo"," ","Confirme que el número identificador del producto esté asociado a un Nombre de producto en Integra."," ","Nombre del producto"," ","Confirme que se esté pidiendo el producto correcto."," ","Cantidad"," ","Confirme que la cantidad sea correcta."," ","Cuenta/nombre de proveedor"," ","Confirme o introduzca el número de cuenta de proveedor."," ","Cuenta"," ","Revise la cadena de cuenta para asegurarse de que la cuenta principal y todos los códigos D sean correctos para el gasto."," ","Consejo: Haga clic en este campo para activar una ventana emergente con los detalles de los códigos de las cuentas."," "," Desplácese hacia abajo hasta la sección ","Detalles de línea"," del formulario de PO y haga clic en la pestaña ","Dirección",". "," "," Si los artículos se van a entregar inicialmente a una ubicación distinta al almacén de IRC de destino, p. ej., un aeropuerto de punto de entrada, seleccione la ubicación de la lista de selección desplegable en el campo ","Dirección de entrega",". De forma adicional, en el cuadro de texto debajo de Información de advertencia, introduzca un nota que identifique la ubicación de destino final. "," "," Haga clic en la pestaña ","Encabezado"," y desplácese hacia abajo hasta la sección Configuración del encabezado. "," "," En el menú de la parte superior de la página, haga clic en ","Editar",". "," "," En el campo ","Solicitante",", introduzca el nombre del solicitante. "],[" "," En la barra de herramientas en la parte superior de la página, haga clic en ","Flujo de trabajo"," y haga clic en ","Enviar",". "],[" ","Ha revisado y enviado un PO al flujo de trabajo para su aprobación."],[" ","Una vez aprobado el PO, se debe confirmar y transmitir al proveedor."],[" ","Utilizar este procedimiento para confirmar un PO que se ha aprobado completamente."],[" "," El PO debe tener el estado ","Aprobado"],[" "," Desde la página de inicio de Integra, navegue a través de los módulos ","Adquisiciones y abastecimiento > Pedidos > Todos los pedidos",". "," "," Localice el PO correspondiente y haga clic en el número de PO para abrir el formulario de PO. "," "," En el menú de la parte superior de la página, haga clic en ","Compra",". "," "," En el panel de acciones ","Actualizar",", haga clic en ","Detalles de confirmación de","pedido",". "],[" "," En el campo ","Informe de confirmación",", seleccione la opción correspondiente de la lista de selección desplegable. "," ","Notas sobre los Términos y condiciones:"," ","Los Términos y condiciones son textos estándar que se aplican a todos los pedidos de IRC"," ","Para los PO que ","no"," hacen referencia a un contrato de compraventa, seleccione la última opción, ","Pedido sin términos y condiciones."," Esta acción garantizará que el PO se transmita al proveedor con los términos y condiciones que se muestran en la salida de PO."," ","Para los PO de servicios que ","no"," hacen referencia a un contrato de compraventa, seleccione uno de:"," ","Pedido de servicios inferior a 2500 $ con términos y condiciones"," ","Pedido de servicios superior a 2500 $ con términos y condiciones"," ","Para los PO de artículos que se crearon con referencia a un contrato de compraventa, seleccione ","Compra sin términos y condiciones.",". ","(Los términos y condiciones tomarán los valores predeterminados del contrato)"," "," Haga clic en ","OK ","para continuar. "," "," En el panel de acciones ","Generar",", haga clic en ","Confirmar",". "," "," Para ver el PO, haga clic en ","Confirmación de pedido"," en la pestaña desplegable ","Diarios",". "," "," En caso necesario, exporte el PO a formato PDF haciendo clic en ","Exportar > PDF",". "],[" ","Ha confirmado un PO y lo ha transmitido al proveedor."],[" ","Los siguientes informes están disponibles para gestionar los activos fijos."],[" ","Utilizar este procedimiento para ver todos los pedidos que se han creado para un proyecto."],[" "," El pedido planificado debe haberse convertido en un pedido de compra. "],[" "," Navegue a través de los módulos ","Gestión de proyectos y contabilidad > Proyectos > Todos los proyectos",". "," "," Abra el formulario del proyecto. "," "," En el menú de la parte superior, haga clic en ","Gestionar",". "," "," En ","Información relacionada",", haga clic en ","Tareas de artículo"," y seleccione ","Pedidos"," de la lista de selección desplegable. "," "," Revise la lista de pedidos que se han generado para el proyecto. Desplácese hacia la derecha para ver más información. "," "," Para abrir el PO real, haga clic en el número de PO. "],[" ","Ha mostrado una lista de todos los pedidos vinculados a un proyecto."],[" ","Hay un flujo de trabajo personalizado que comprueba las condiciones establecidas para cada línea de previsión de artículos. Si alguna de las condiciones siguientes existe, la línea de previsión de artículos se rechazará y no se generará un requerimiento de artículo para dicha línea. A continuación se indican los detalles de las condiciones del flujo de trabajo que causarán el rechazo de una línea de previsión de artículos."," ","Condición"," ","Motivo de rechazo"," ","1"," ","Si el artículo es un «marcador de posición», la línea se rechazará."," ","2"," ","Si el artículo «no cumple los requisitos», la línea se rechazará."," ","3"," ","Si la fecha solicitada es anterior a mañana, la línea se rechazará."," ","4"," ","Si el modelo de previsión «estimada» se introduce en la columna ","Modelo",", la línea se rechazará. Se debe introducir el valor «obligatorio»."," ","5"," ","Si el estado de emergencia es X..."," ","6"," ","Si falta alguna dimensión financiera, la línea se rechazará."," ","rescuenet.rescue.org/i/integra-support"]],"2":[[" ","Información de proceso empresarial"]],"3":[[" ","Etapa de aprobación de propuesta/proyecto"],[" ","Flujo de procesos - Previsión de artículos a Requerimientos de artículos"],[" ","Procesamiento de pedidos desde Requerimientos de artículos"],[" ","Artículos no adquiridos con la previsión de artículos"],[" ","Rellenar la plantilla de previsión de artículos"],[" ","Cargar la plantilla de previsión de artículos en Box"],[" ","Validar las líneas de previsión de artículos cargadas contrastando con los artículos restringidos del donante"],[" ","Aprobar líneas de previsión de artículos"],[" ","Cree una línea de previsión de artículos directamente en Integra"],[" ","Actualizar la previsión de artículos en Integra"],[" ","Mostrar el inventario disponible"],[" ","Revisar y/o actualizar requerimiento(s) de artículos en el proyecto"],[" ","Crear un pedido del pedido de venta"],[" ","Revisar el borrador del pedido y enviarlo para su aprobación"],[" ","Confirmar PO y transmitirlo al proveedor"],[" ","Informes/Consultas"],[" ","Ver los pedidos de un proyecto"],[" ","Apéndice"," ","Condiciones de Superado/No superado al aprobar líneas de previsión de artículos"]],"4":[[" ","Objetivo"],[" ","Requisitos previos"],[" ","Pasos"],[" ","Resultado"],[" ","Objetivo"],[" ","Requisitos previos"],[" ","Pasos"],[" ","Resultado"],[" ","Próximos pasos"],[" ","Objetivo"],[" ","Requisitos previos"],[" ","Pasos"],[" ","Resultado"],[" ","Objetivo"],[" ","Requisitos previos"],[" ","Pasos"],[" ","Resultado"],[" ","Objetivo"],[" ","Requisitos previos"],[" ","Pasos"],[" ","Resultado"],[" ","Próximos pasos"],[" ","Objetivo"],[" ","Requisitos previos"],[" ","Pasos"],[" ","Resultado"],[" ","Objetivo"],[" ","Requisitos previos"],[" ","Pasos"],[" ","Resultado"],[" ","Objetivo"],[" ","Requisitos previos"],[" ","Pasos"],[" ","Resultado"],[" ","Objetivo"],[" ","Requisitos previos"],[" ","Pasos"],[" ","Resultado"],[" ","Objetivo"],[" ","Requisitos previos"],[" ","Pasos"],[" ","Resultado"],[" ","Próximos pasos..."],[" ","Objetivo"],[" ","Requisitos previos"],[" ","Pasos"],[" ","Resultado"],[" ","Objetivo"],[" ","Requisitos previos"],[" ","Pasos"],[" ","Resultado"]],"5":[[" ","Nota",": ","Se muestra una lista de las líneas de previsión de artículos existentes para el proyecto."],[" ","Consejo",": ","Filtre en el campo Estado para mostrar solo líneas de previsión de artículos con estado Borrador."],[" ","Nota",": ","Si los tres puntos no se muestran,haga clic en Flujo de trabajo del menú de la parte superior de la página para realizar la misma acción."],[" ","Nota",": ","Estas líneas se aprobarán automáticamente en el transcurso de un minuto (aproximadamente)."],[" ","Nota",": ","Se muestra una lista de las líneas de previsión de artículos existentes para el proyecto."],[" ","Notas",": "," "," En caso necesario, este valor puede cambiarse en el momento de la recepción. "," "," Para servicios, seleccione siempre la ubicación ","Sin stock","."],[" ","Nota",": ","Si se necesitan filtros adicionales, haga clic en Añadir para seleccionar otros valores como ID de proyecto o Ubicación."],[" ","Nota",": ","Utilice el Filtro en el panel de Filtro para contraer o expandir el panel según se requiera."],[" ","Nota",": ","Solo Cadena de suministro puede realizar cambios en una línea de requerimiento de artículo."],[" ","Consejo",": ","Añada la columna «Número de referencia» a la cuadrícula de tabla para ver los números de pedido asociados. ","Este campo también está disponible en la pestaña Otros. ","Si se añade una columna, guárdelo como vista personalizada."],[" ","Nota",": ","Los PO nuevos se muestran normalmente en la parte inferior de la página Lista de pedidos."],[" ","Importante",": ","Este nombre determina la persona a quien se envía el PO para la aprobación del flujo de trabajo. ","Introducir un nombre de solicitante en el encabezado del PO hará que se aplique dicho solicitante a todas las líneas en el PO. ","En caso de que el solicitante sea diferente en algunas líneas, el solicitante deberá añadirse a nivel de línea."],[" ","Nota",": ","También puede accederse a los PO del proyecto desde dentro del mismo proyecto. ","Consulte el siguiente procedimiento en esta guía de usuario para obtener instrucciones: ","Ver los pedidos de un proyecto","."," ","Nota",": ","Asegúrese de que la vista ","Lista de pedidos"," esté activa. ","Si no, haga clic en la flecha desplegable para seleccionarla y anclarla como su vista predeterminada. ","Esta vista se ha personalizado para los usuarios de Integra."],[" ","Nota",": ","Asegúrese de que la vista ","Lista de pedidos ","esté activa. ","Si no, haga clic en la flecha desplegable para seleccionarla y anclarla como su vista predeterminada. ","Esta vista se ha personalizado para los usuarios de Integra."],[" ","Importante",": ","Este nombre determina la persona a quien se envía el PO para la aprobación del flujo de trabajo. ","Introducir un nombre de solicitante en el encabezado del PO hará que se aplique dicho solicitante a todas las líneas en el PO. ","En caso de que el solicitante sea diferente en algunas líneas, el solicitante deberá añadirse a nivel de línea."],[" ","Importante",": ","Se requiere el paso de confirmación antes de que se pueda transmitir el PO al proveedor."],[" ","Nota",": ","Este paso permite la selección de parámetros que determina qué información se mostrará en el PO. ","P. ej., Términos y condiciones."]],"id":"22"})