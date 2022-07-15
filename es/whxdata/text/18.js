rh._.exports({"0":[[" ","Cierre de final de mes (RAI EE. UU.)"]],"1":[[" "," El diario Dynad se utiliza para rellenar y cargar en masa entradas de diario en Integra.\n      "," "," Algunos ejemplos de diarios cargados en masa incluyen asignación de nóminas, subconcesiones/gastos, reclasificación de entradas y entradas de asignación de costes de programa compartidos. "," "," Seleccionar el nombre de diario correcto en el diario Dynad es esencial para garantizar que los datos se procesan correctamente en Integra.\n          "," "," Detrás de cada nombre de diario hay una codificación sistemática, es decir, perfiles de contabilización que el sistema Integra actualiza de la forma correcta. "," "," Consulte el apéndice al final de esta guía para obtener una lista completa de nombres de diario y su uso. "," "," La recomendación es que si tiene menos de diez (10) líneas, puede resultar más fácil crear las entradas de diario directamente en Integra. "," "," Para la mayoría de tareas empresariales, las transacciones se contabilizan en libros auxiliares (en vez de en el Libro mayor).\n      "," "," No obstante, hay transacciones seleccionadas que se contabilizan directamente en el Libro mayor. "," "," Los estados de periodo se utilizan par controlar el acceso para las contabilizaciones en el libro mayor y los libros auxiliares.\n      "," "," Por ejemplo, todos los libros auxiliares de proveedor (AP) y de cliente (AR) deberían tener los diarios de facturas/pagos contabilizados antes del sexto día laborable del cierre de final de mes. Para evitar que los usuarios contabilicen libros auxiliares de AR/AP después del sexto día laborable, los libros auxiliares pueden «cerrarse» para la contabilización cambiando el estado del módulo a En espera. "],[" "," Cerrar/abrir periodos de contabilización fiscal\n      "," "," Este proceso se realiza en momentos especificados del mes por personas designadas de Finanzas. "," "," Asegúrese de que todas las transacciones «diarias» se hayan contabilizado en el periodo fiscal correcto. "," "," Contabilizar las transacciones de empresas vinculadas. "," "," Contabilizar los diarios de final de mes.\n      "," "," Este proceso se refiere a las entradas de diario que solo se procesan a final de mes "," "," Calcular la ICR y preparar el diario de comisiones "," "," Realizar reconciliación y análisis\n      "," "," Este proceso incluye el uso de las siguientes transacciones de Integra entregadas/funcionalidad estándar para identificar y corregir las discrepancias\n          "," "," Balance de comprobación "," "," Transacciones con comprobantes "," "," Explorador de origen de contabilidad "," "," Seguimiento de entradas originales "," "," Generar informes\n      "," "," Hay disponibles numerosos informes para su análisis en Integra y Power BI. "],[" ","Consulte la lista de comprobación en el apéndice de este documento. Esta lista de comprobación también se puede encontrar en RescueNet."],[" ","Para muchas tareas empresariales de final de mes, los procedimientos paso a paso están documentadas en otras secciones ya que hay transacciones estándar que se utilizan para tareas empresariales diarias. En estos casos, se incluye una referencia a la sección/el procedimiento aplicable en este documento."," ","Esta sección incluye procedimientos detallados para tareas que no están incluidos en otra guía de usuario."],[" ","Utilizar este procedimiento para abrir o cerrar un periodo de calendario fiscal."," ","Una vez que cierra el periodo actual, el nuevo periodo debe abrirse inmediatamente para asegurarse de que los usuarios pueden realizar transacciones desde el primer día del siguiente periodo."," ","Se ha definido un grupo de seguridad personalizado «Cierre de periodo» (","PrdCls",") para permitir a los usuarios de Finanzas designados procesar las transacciones periódicas después de que se haya cerrado el periodo a la población de usuarios general."," ","Los siguientes «estados» de periodo se utilizan para abrir y cerrar periodos de calendario fiscal."," ","Abierto",": Abierto a usuarios elegibles para la contabilización de transacciones.  "," ","En espera",": Las transacciones no pueden contabilizarse en el periodo. No obstante, los usuarios seleccionados en Finanzas pueden contabilizar transacciones con fines de conciliación de final de mes. "," ","Permanentemente cerrado",": Este estado no se utiliza actualmente; una vez que cierra permanentemente un periodo, no puede volver a abrirse nunca más. "],[" "," Desde el panel de Integra, vaya a ","Libro mayor > Calendarios > Calendarios de libro mayor",".   "," "," En el panel del lado izquierdo de la pantalla, haga clic en el periodo para cambiarlo. "," "," En la columna ","Entidad jurídica",", seleccione la entidad jurídica que se va a actualizar.  "],[" "," En la parte superior izquierda de la página, haga clic en ","Editar",". "," "," Seleccione ","Actualizar estado del periodo",".  "," "," Haga clic en ","Editar ","en el lado superior derecho para poder cambiar el estado del periodo.  "," "," En el menú desplegable del campo ","Estado del periodo",", seleccione ","En espera/Abierto"," para el periodo que se cierra o abre.    "," "," En la columna ","Libro mayor",", seleccione ","PrdCls",". "," "," La columna Libro mayor se refiere, como su nombre indica, al libro mayor "," "," PrdCls es un grupo de seguridad personalizado creado para personas de Finanzas específicas para que puedan contabilizar transacciones después de que el estado del periodo se haya actualizado a En espera. "," "," Si abre o cierra un libro auxiliar, haga clic en ","Actualizar acceso al módulo",". "," "," Para actualizar el acceso al módulo, vaya al módulo que desea actualizar.  "," "," Seleccione del menú desplegable si desea restringir un módulo o grupo de usuarios. Si selecciona «None», significa que no puede realizarse ninguna contabilización en ese libro auxiliar.  Además, si selecciona algún nivel de acceso, anula el estado del periodo.   "," "," Todos los ajustes de entradas y reclasificaciones necesarios se realizarán en este punto.  "," ","‎ "," "," Haga clic en ","Guardar",".  "],[" ","Ha abierto o cerrado un periodo de contabilización fiscal."],[" ","Consulte la sección"," Contabilidad de empresas vinculadas ","para obtener los procedimientos paso a paso específicos sobre cómo contabilizar diarios de empresas vinculadas."," ","El apéndice de esta sección incluye requisitos de entrada de contabilidad específicos basados en el tipo de transacción de empresas vinculadas que se está procesando."],[" ","Los diarios periódicos se utilizan para contabilizar cargos mensuales como alquileres de prepago, seguros de prepago, etc."," ","Consulte la sección Entrada y carga de diario para obtener procedimientos paso a paso específicos sobre cómo contabilizar diarios."," ","Hay diferentes nombres de diario para los diversos cargos periódicos. Consulte la tabla de nombres de diario en la plantilla de diario Dynad para seleccionarlo correctamente."],[" ","Consulte la siguiente sección para obtener procedimientos paso a paso sobre cómo contabilizar diarios."," ","Entrada y carga de diarios"," ","Procedimiento: ","Uso de la plantilla de diario Dynad para cargar entradas de diario"," ","Procedimiento: ","Contabilización de diarios periódicos"],[" ","Consulte la siguiente sección para obtener procedimientos paso a paso sobre cómo contabilizar diarios."," ","Entrada y carga de diarios"," ","Procedimiento: ","Uso de la plantilla de diario Dynad para cargar entradas de diario"],[" ","Consulte la siguiente sección para obtener procedimientos paso a paso sobre cómo contabilizar diarios."," ","Entrada y carga de diarios"," ","Procedimiento: ","Uso de la plantilla de diario Dynad para cargar entradas de diario"],[" ","Utilizar este procedimiento para revertir entradas erróneas en el GL y registrarlas posteriormente en las entradas correctas. "],[" "," Después de ejecutar el balance de comprobación, haga doble clic en la transacción, en la columna Balance de cierre que debe revertirse.  "," "," Haga clic en ","Revertir transacción",". "," "," En la pantalla ","Reversión de transacción",", introduzca la ","Fecha de contabilización de reversión. "," "," Haga clic en ","OK",".  "," ","  Haga clic en ","Seguimiento invertido",". Se mostrarán las transacciones original y revertida.   "," "," Cierre la transacción seleccionando la ","X"," en la parte superior derecha de la pantalla cuando la revisión se haya completado.  "],[" ","La transacción se ha revertido y revisado. "],[" ","Utilizar este procedimiento para recodificar una transacción de un proyecto a otro."," ","Ajustar las transacciones del proyecto en el libro auxiliar del proyecto ajusta automáticamente la contabilización del correspondiente libro mayor."," ","Hay dos métodos de ajustar transacciones de proyecto en Integra."," "," Ajustando las transacciones por proyecto. "," "," Ajustando las transacciones por lotes. "],[" ","Consulte la siguiente sección para obtener procedimientos paso a paso sobre cómo contabilizar diarios."," ","Entrada y carga de diarios"," ","Procedimiento",": Uso de la plantilla Dynad para cargar entradas de diario "," ","Procedimiento",": Registrar entradas de diario "],[" ","Utilizar este procedimiento para asignar valores de ajuste de inventario para actualizar las correspondientes cuentas de contabilidad general."," ","Por ejemplo, un ajuste de inventario que Cadena de suministro realizó anteriormente por inventario dañado necesita asignarse ahora a una cuenta GL de seguro."," ","Consulte la siguiente guía de usuario para obtener procedimientos paso a paso sobre cómo contabilizar diarios."," ","Entrada y carga de diarios"," ","Procedimiento",": Uso de la plantilla Dynad para cargar entradas de diario "],[" ","Utilizar este procedimiento para mostrar diarios no contabilizados para revisar y actuar en caso necesario. P. ej., contabilizar diarios aplicables."],[" "," Desde el panel de Integra, vaya a ","Libro mayor > Entradas de diario > Diarios generales",". "," "," En el encabezado ","Mostrar",", la entrada predeterminada es ","No contabilizada",". Estas son las entradas que hay que mirar para determinar qué debería haberse contabilizado en el mes que se cierra. "," "," Esta entrada puede cambiarse a Contabilizado o Todos haciendo clic en la flecha desplegable. "," "," Para determinar la fecha en la que se ha introducido un diario, personalice la cuadrícula de tabla añadiendo la columna ","Fecha y hora de creación",". "," "," Haga clic con el botón derecho en cualquier encabezado de columna y seleccione ","Añadir columnas",". "," "," En el cuadro de filtro, introduzca el texto ","Creado",". "," "," Seleccione ","Fecha y hora de creación"," de la lista de selección el dato en la tabla. La columna se añadirá al final de las columnas actuales. "," "," Revise la lista de diarios no contabilizados en el periodo actual y actúe según sea necesario, p. ej., contabilizando los diarios aplicables. "],[" ","Ha identificado diarios no contabilizados en el periodo de cierre de final de mes."],[" ","HQ ejecuta el reconocimiento de ingresos. Las oficinas RAI son responsables de calcular la ICR (recuperación de gastos indirectos), preparar el diario de comisiones y enviar el diario a HQ para su carga y contabilización."," ","La ICR se calcula y prepara en una plantilla de comisiones fuera de Integra. Esta plantilla solo puede descargarse desde la siguiente ubicación."," ","Hay dos métodos disponibles para cargar entradas de ICR:"," "," Realizando una carga en masa de entradas con la herramienta Conector de datos (uso recomendado cuando hay más de 10 entradas). "," "," Escribiendo las entradas de ICR directamente en Integra (opción utilizada cuando hay menos de 10 entradas) "],[" ","Utilizar este procedimiento para utilizar la herramienta Conector de datos para cargar en masa entradas de ICR en Integra."," ","Solo Finanzas de HQ realiza esta acción."],[" ","La plantilla de comisiones de ICR debe haberse completado."],[" "," Navegue a través de los módulos ","Gestión y contabilidad de proyectos > Comisión",".  "," "," En el menú de la parte superior, haga clic en ","Abrir en Excel"," y haga clic en ","OK",". "," "," Haga clic en el archivo Excel para abrirlo.   "],[" "," Active el número de filas requeridas para copiar los datos de la plantilla de comisiones de ICR.   "," "," Vaya al borde del lado derecho y arrastre hacia abajo manteniendo pulsado el botón izquierdo del ratón. Suelte el botón izquierdo del ratón. Debería ver todas las filas activadas. Esto significa que puede acceder a algunos de los datos directamente desde Integra haciendo clic en una celda activada.  "," "," En las celdas activas, copie y pegue el «valor especial» en cada columna.  "," "," Haga clic en ","Publicar",".   "," ","‎"," "," Navegue a través de los módulos ","Gestión y contabilidad de proyectos > Comisión",".  "," ","\n    ‎\n  "," "," Seleccione su diario y haga clic en ","Líneas ","en la parte superior para mostrar los detalles de las líneas.  "," "," En el menú de la parte superior, haga clic en ","Validar"," para comprobar si hay errores.  "," "," En la ventana emergente ","Comprobar diario",", haga clic en ","OK ","para continuar.  "," "," Si no hay errores, aparecerá un mensaje en una cinta azul cerca de la parte superior de la página.  "," "," En el menú de la parte superior de la página, haga clic en ","Contabilizar",".   "],[" ","Utilizar este procedimiento para introducir diarios de comisiones individuales en Integra."," ","Solo Finanzas de HQ realiza esta acción."],[" ","La plantilla de comisiones de ICR debe haberse completado."],[" "," Navegue a través de los módulos ","Gestión y contabilidad de proyectos > Comisión",".  "," "," En el menú de la parte superior de la página, haga clic en ","Nuevo",". "," ","‎\n    ","\n    ‎"," "," Seleccione la nueva línea añadida y haga clic en ","Líneas ","en el menú de la parte superior de la página. "," "," En el menú de la parte superior de la página, haga clic en ","Nuevo ","para añadir líneas de diario. "," "," Rellene los siguientes campos para la línea de factura de proveedor: "," ","Campo"," ","Entrada obligatoria"," ","Fecha de proyecto"," ","Seleccione la fecha de contabilización."," ","ID de proyecto"," ","Introduzca el código D1."," ","Categoría"," ","Introduzca D2 (categoría de proyecto) que corresponde al código D1."," ","Recurso"," ","Deje este campo en blanco."," ","Descripción"," ","Introduzca una descripción."," ","Divisa de ventas."," ","No cambie este campo."," ","Este valor toma automáticamente como valor predeterminado la divisa del contrato del proyecto cuando selecciona su ID de proyecto."," ","Precio de venta"," ","Introduzca el importe de la comisión."," ","Propiedad de línea"," ","Este valor tiene predeterminado Facturable."," ","Objetivo"," ","Deje este campo en blanco."," "," En el menú de la parte superior de la página, haga clic en ","Dimensiones financieras."," "," Complete las dimensiones financieras requeridas y haga clic en ","OK",". "],[" "," En el menú de la parte superior, haga clic en ","Validar ","para comprobar si hay errores.  "," "," En la ventana emergente ","Comprobar diario",", haga clic en ","OK ","para continuar.  "],[" "," En el menú de la parte superior de la página, haga clic en ","Contabilizar",".   "],[" ","La conciliación consta de tres pasos clave."," "," Ejecutar los informes de conciliación para identificar discrepancias. "," "," Utilizar las herramientas de análisis de Integra para encontrar la causa de la discrepancia. "," "," Procesar entradas de diario para corregir discrepancias. "," ","Este tema identifica los informes de conciliación disponibles en Integra, PowerBI o Excel."],[" ","Utilizar este procedimiento para ejecutar los diversos informes de conciliación para identificar discrepancias."," ","Una causa común para las diferencias es que una transacción se ha contabilizado en el Libro mayor en vez del libro auxiliar. Rellene los campos Hasta la fecha y Desde la fecha y asegúrese de que selecciona la divisa de contabilidad en el campo Divisa. Ejecute el informe y observe la columna de diferencias. Siempre debe ser cero. Si no es cero, investigue y contabilice las entradas de ajuste necesarias. "," ","A continuación se describe una lista de informes de conciliación disponible en Integra, PowerBI, o Excel y sus correspondientes rutas de navegación por los módulos."," ","Informe de conciliación"," ","Ruta de acceso de menú"," ","Cliente a Libro mayor"," ","Cuentas por cobrar ",">"," Consultas e informes ",">"," Clientes ",">"," Informe de conciliación cliente a libro mayor"," ","Proveedor a Libro mayor"," ","Cuentas por pagar ",">"," Consultas e informes ",">"," Informes de proveedor ",">"," Conciliación de proveedor a libro mayor"," ","Proyecto a Libro mayor"," ","Libro mayor ",">"," Consultas e informes ",">"," Informes de consolidación ",">"," Conciliación de GL a proyecto"," ","Banco a Libro mayor"," ","Treasury Automation Suite ",">"," Consultas ",">"," Banco ",">"," Conciliación de extractos de banco/GL"," ","Banco automatizado/manual"," ","Cuentas por cobrar ",">"," Consultas e informes ",">"," Clientes ",">"," Informe de conciliación cliente a libro mayor"," ","Conciliación de balance general (para cuentas del balance general que no pertenecen al libro auxiliar)"," ","Consultar la lista de cuentas principales en la lista de comprobación de cierre de final de mes"," ","Asignaciones de % de beneficio para personal – Gastos salariales"," ","Este informe está disponible en PowerBI."],[" ","Las siguientes consultas clave se utilizan de forma repetida e iterativa en Integra para analizar datos y resolver discrepancias con fines de cierre de final de mes. Los datos pueden exportarse de estas consultas a Excel para facilitar la investigación."," "," Balance de comprobación "," "," Transacciones con comprobantes "," "," Explorador de origen de contabilidad (ASE) "," "," Pista de auditoría "," "," Seguir entradas originales "],[" ","El balance de comprobación es una página de lista que muestra todos los saldos de una cuenta y/o las dimensiones financieras para un periodo dado. Cuando se abre el balance de comprobación por primera vez, se actualiza con los saldos de las fechas y propiedades que están establecidos en los parámetros. Las propiedades que pueden cambiarse en los parámetros incluyen fechas, capa de registro, cómo se muestran los saldos abiertos y qué tipos de transacción de cierre mostrar. "," ","Cuando cambia los parámetros, los saldos se actualizan. También puede seleccionar para qué dimensiones establecidas desea ver los saldos y si cada una de las dimensiones se muestra en una columna separada. También puede explorar en profundidad los saldos para ver las transacciones que componen el saldo. "],[" "," Vaya a ","Libro mayor > Consultas e informes > Balance de comprobación",".  "," "," En el campo ","Desde la fecha",", introduzca la fecha de inicio para el saldo mensual.  "," "," En el campo ","Hasta la fecha",", introduzca la fecha de finalización para el saldo mensual.  "," "," Haga clic en ","Calcular saldos",".  "," "," Una vez completado el balance de comprobación, puede hacer doble clic en los saldos para ver las transacciones que componen el saldo.  "," "," Cierre la transacción seleccionando la ","X"," en la parte superior derecha de la pantalla cuando la revisión se haya completado.  "],[" ","Se ha generado el balance de comprobación. "],[" "," En la pantalla ","Balance de comprobación"," , haga clic en el botón Microsoft y seleccione ","EXPORTAR A EXCEL > Balance de comprobación",".  "," "," Haga clic en ","Abrir ","para abrir el archivo Excel en su ordenador o haga clic en ","Guardar ","para guardarlo en su ordenador.  "," ","El balance de comprobación puede analizarse en Excel. Enumera el nombre de cada cuenta de contabilidad nominal y el valor del último saldo de contabilidad nominal, con un saldo de débito o un saldo de crédito, así como el balance de cierre:  "],[" ","Para obtener detalles de las transacciones contabilizadas en el sistema, utilizamos transacciones con comprobantes en el Libro mayor. De ese modo, se extraen todas las transacciones y se pueden limitar por fecha, diario, número de comprobante y cuenta principal. Las transacciones con comprobantes pueden extraerse independientemente del intervalo de fechas.  "],[" "," Navegue a través de los módulos ","Libro mayor > Consultas e informes > Transacciones con comprobantes",".  "," "," Deje todo en blanco si desea extraer todas las transacciones. De lo contrario, complete un detalle específico en la columna de criterios que conozca de la transacción que se va a descargar.  "," "," Revise los resultados. "],[" ","Otro método utilizado para obtener los detalles de las transacciones del sistema es utilizar el explorador de origen de contabilidad. Igual que el balance de comprobación, este extrae las transacciones, pero solo limitadas al año natural.   "],[" "," Navegue a través de los módulos ","Libro mayor > Consultas e informes > Explorador de origen de contabilidad",".  "," "," En el menú ","Actualizar",", seleccione los intervalos de fechas.  "," "," Haga clic en ","Actualizar",".  "," ","Las transacciones se muestran automáticamente basándose en la configuración predeterminada en el campo Dimensiones financieras.  "," "," Haga clic en el campo ","Dimensiones financieras"," para seleccionar cualquier combinación de dimensiones pertinente. "," ","Puede exportar a Excel como se ha tratado anteriormente en el ejemplo de balance de comprobación. "],[" ","Utilizar este procedimiento para ver la persona que ha contabilizado una transacción específica."," ","Integra tiene la capacidad de conocer en cualquier momento que usted ha contabilizado la transacción en el sistema. Hay dos métodos para determinar quién ha contabilizado la transacción:  "," "," Informe de pista de auditoría en el módulo de Libro mayor "," "," El método de transacción  "],[" "," Vaya a ","Libro mayor > Consultas e informes > Pista de auditoria"," "," Se abrirá una lista de registros. La columna ","Creado por ","muestra quién ha contabilizado la transacción.  "," ","‎"," "," Si desea ver los detalles de las transacciones, seleccione solo una transacción.  "," "," Haga clic en ","Transacciones con comprobantes",".  "," "," Revise los resultados. "],[" ","En Integra, puede seguir el origen de una transacción retrospectivamente hasta la documentación original y los comprobantes relacionados."," ","Las entradas de diario originales pueden verse a través de las siguientes transacciones:"," "," Transacciones con comprobantes  "," "," Explorador de origen de contabilidad "," "," Balance de comprobación "," ","\n    ‎La función de comprobantes relacionados se utiliza para seguir transacciones de empresas vinculadas. Esta le permite ver de qué entidad jurídica ha originado una entrada.\n  "],[" "," Inicie sesión en Integra y navegue hasta ","Transacciones con comprobantes"," en el módulo ","Libro mayor",".  "," "," En la pantalla que se abre, seleccione la transacción para la cual desea seguir su origen.  "," "," Observe la barra de herramientas para localizar las funciones de seguimiento.  "," "," Haga clic en el documento original en las funciones mostradas anteriormente.   "," "," En la ventana que se abre, haga clic en ","Ver detalles",".   "," "," En la ventana que se abre, verá un comprobante de diario de una línea. Haga clic en ","Comprobante ","para ver la entrada de diario completa  "," "," Ver la entrada original.  "," "," Para saber si la transacción procede de otra entidad jurídica, la función Comprobantes relacionados debe estar activa.  Después de seleccionar una transacción, observe la barra de herramientas para ver si la función ","Comprobantes relacionados"," está activa. Si lo está, haga clic en la función y se abrirá una tabla.  "," "," En la tabla que se abre, verá las entidades jurídicas enumeradas. Si desea ver el comprobante del diario, haga clic en ","Comprobante",".  "],[" ","Los siguientes informes deben ejecutarse después de haber completado el cierre de final de mes."," ","Informe"," ","Ubicación"," ","Balance de comprobación final"," ","En Integra, navegue hasta Libro mayor ",">"," Consultas e informes ",">"," Balance de comprobación."," ","Informe de ingresos y gastos"," ","Este informe existe en PowerBI."," ","Proyecto BvA"," ","Estos informes existen en PowerBI."," ","Informe equivalente FM01"," ","Este informe existe en PowerBI."],[" ","Se han añadido notas adicionales a determinados nombres de diario para una mayor claridad."," ","Inserte la tabla una vez finalizada."],[" ","Esta lista de comprobación describe tareas y fechas clave necesarias para completar el cierre de final de mes. Para obtener información detallada sobre cómo realizar transacciones del sistema, consulte la siguiente guía de usuario de formación en RescueNet:"," "," Cierre de final de mes (RAI) "," ","Fechas de vencimiento mensuales"," ","La siguiente tabla enumera las fechas de vencimiento para las tareas de cierre de final de mes. Después de la tabla se describen más detalles sobre cada una de estas."," ","Fecha de vencimiento"," ","Tarea"," ","Último día de cada mes"," ","Contabilizaciones de libros auxiliares"," ","El día 8 de cada mes"," ","Tareas de cierre de empresas vinculadas"," ","El día 12 de cada mes"," ","Contabilizaciones de diarios generales mensuales"," ","Nota: Algunos de estos diarios pueden contabilizarse durante el mes."],[" ","Gestión de gastos ","– Procesar y contabilizar todos los anticipos para viajes e informes de gastos aprobados (incluidas las liquidaciones de tarjeta de crédito y TER). "," ","Cuentas por pagar"," – Procesar todas las facturas y pagos de proveedor. "," ","Cuentas por cobrar ","– Registrar todas las recepciones y depósitos de efectivo. "," ","Gestión bancaria y efectivo","– Contabilizar cargos directos, registrar en diarios transacciones bancarias no contabilizadas según la conciliación bancaria completa del mes anterior. "," ","Activos fijos ","– Generar propuesta de depreciación "," ","Gestión del inventario"," – Todas las transacciones de recogida, empaquetado y contabilización (excepto la contribución «en especie») "],[" "," Contabilizar las entradas de empresas vinculadas en la cuenta 29400 antes del día 8 de cada mes para las oficinas RAI que todavía utilizan SUN "," "," Contabilizar entradas de empresas vinculadas en HQ – 9IRC "," "," Desplazar entradas de empresas vinculadas en el periodo actual del Libro mayor a los proyectos correspondientes "," "," Preparar y contabilizar los diarios generales mensuales, contabilizar los alquileres de prepago, seguros de prepago, cargo aplazados, etc. "," "," Contabilizar las acumulaciones (en caso necesario) "," "," Contabilizar la asignación de depreciación. "," "," Contabilizar la contribución en especie "," "," Contabilizar los ajustes de inventario (en caso necesario) "," "," Contabilizar las entradas de ajuste del proyecto necesarias "],[" "," Contabilizar las entradas de asignación de nómina "," "," Contabilizar las entradas de asignación de costes de programa compartidos "],[" "," Se contabilizan todos los diarios estándar "," "," Se eliminan todos los diarios innecesarios "," "," Se investigan, enmienda y/o contabilizan todos los diarios no contabilizados con una fecha del periodo actual. "],[" "," Una vez completadas todas las tareas anteriores, calcular las entradas de ICR y rellenar el diario "," "," Enviar el diario a Finanzas de HQ para su carga "],[" "," Ejecutar el informe de conciliación de cliente a libro mayor. "," "," Ejecutar el informe de conciliación de proveedor a libro mayor. "," "," Ejecutar el informe de conciliación de proyecto a libro mayor. "," "," Ejecutar el informe de conciliación de banco a libro mayor. "," "," Contabilizar todas las entradas de ajuste para garantizar que los saldos en el libro auxiliar y en el libro mayor sean iguales "],[" "," Ejecutar la conciliación bancaria automatizada o manual para conciliar las cuentas bancarias. "," "," Realizar la conciliación de balance general y contabilizar todas las entradas de ajuste para conciliar. "," "," Calcular y conciliar las asignaciones de % de beneficio para personal – Gastos salariales "],[" "," Generar balance de comprobación final "," "," Generar informe de ingresos y gastos "," "," Generar todos los informes de proyecto BvA "," "," Generar extractos financieros de final de periodo utilizando el informador financiero "," "," Equivalente de informe FM01 "," ","rescuenet.rescue.org/i/integra-support"]],"2":[[" ","Información de proceso empresarial"]],"3":[[" ","Mensajes clave"],[" ","Tareas de cierre de final de mes (Alto nivel)"],[" ","Abrir y cerrar periodos de contabilización de libro mayor"," ","Abrir o cerrar un periodo de ejercicio fiscal"],[" ","Transacciones de empresas vinculadas"],[" ","Diarios generales de final de mes"," ","Contabilización de diarios periódicos"],[" ","Contabilizar entradas de asignación de depreciación"],[" ","Contabilizar entradas de asignación de nómina"],[" ","Contabilizar entradas de asignación de costes de programa compartidos"],[" ","Ajustes de final de mes"," ","Revertir una entrada de Libro mayor (GL)"],[" ","Contabilizar entradas de ajuste del proyecto"],[" ","Contabilizar ajustes de inventario"],[" ","Comprobar si hay diarios no contabilizados en el periodo contable actual"],[" ","Reconocimiento de ingresos (solo Finanzas de HQ)"],[" ","Realizar carga en masa de la plantilla de diarios de ICR a través de la herramienta Conector de datos (solo Finanzas de HQ)"],[" ","Introducir un diario de comisiones de ICR directamente en integra (solo Finanzas de HQ)"],[" ","Informes de conciliación"],[" ","Tabla de referencia de informes de conciliación"],[" ","Consultas e informes para el análisis de discrepancias"],[" ","Ejecutar informe de balance de comprobación"],[" ","Exportar el balance de comprobación a Microsoft Excel "],[" ","Mostrar transacciones con comprobantes"],[" ","Ejecutar el explorador de origen de contabilidad"],[" ","Ver el Informe de pista de auditoría en el Libro mayor"],[" ","Seguir los documentos originales de las entradas originales y los comprobantes relacionados"],[" ","Tabla de referencia de informes de cierre de final de mes"],[" ","Apéndice"," ","Nombres de diario de Integra y su uso"],[" ","Lista de comprobación de cierre de final de mes (oficinas RAI EE. UU.)"]],"4":[[" ","Objetivo"],[" ","Pasos"],[" ","Resultado"],[" ","Objetivo"],[" ","Pasos"],[" ","Resultado "],[" ","Objetivo"],[" ","Objetivo"],[" ","Objetivo"],[" ","Pasos"],[" ","Resultado"],[" ","Objetivo"],[" ","Requisitos previos"],[" ","Pasos"],[" ","Objetivo"],[" ","Requisitos previos"],[" ","Pasos"],[" ","Objetivo"],[" ","Objetivo"],[" ","Pasos "],[" ","Resultado"],[" ","Objetivo"],[" ","Pasos "],[" ","Objetivo"],[" ","Pasos "],[" ","Objetivo"],[" ","Pasos "],[" ","Objetivo"],[" ","Pasos "]],"5":[[" ","Nota",": ","Después de seleccionar la entidad jurídica, se pueden definir niveles de acceso a módulos específicos."],[" ","Nota",": ","No tiene que esperar hasta el final del mes para introducir/contabilizar cargos periódicos, es decir, si conoce la asignación mensual, puede introducirla antes del final de mes."],[" ","Nota",": ","Solo las transacciones que se originan en el GL pueden revertirse en el GL; cualquier transacción contabilizada en un libro auxiliar debe revertirse en dicho libro auxiliar."],[" ","Nota",": ","Solo lo usuarios con el acceso de seguridad correcto pueden utilizar el formulario de ajuste del proyecto en Integra. ","El motivo es porque el ajuste de proyecto no tiene ningún flujo de trabajo."],[" ","Nota",": ","Si es la primera vez que utiliza el Conector de datos, tendrá que instalar la aplicación en su navegador. ","Además, tendrá que iniciar sesión con sus credenciales de acceso de IRC."],[" ","Notas",": "," "," Cuando contabiliza un diario de comisiones, no se contabiliza en el libro mayor; es una contabilización de libro auxiliar. ","El diario de comisiones se contabilizará en el libro mayor en el momento del reconocimiento de ingresos. "," "," El diario de comisiones no utiliza flujo de trabajo; se basa en el acceso de seguridad que se la da a una persona en el sistema. "],[" ","Nota",": ","Algunas dimensiones financieras pueden tener valores predeterminados basados en la configuración aplicada en el formulario del proyecto."],[" ","Nota",": ","Si no hay errores, aparecerá un mensaje en una cinta azul cerca de la parte superior de la página. "],[" ","Nota",": ","Cuando contabiliza un diario de comisiones, no se contabiliza en el libro mayor; es una contabilización de libro auxiliar. ","Se contabilizará en el libro mayor en el momento del reconocimiento de ingresos. ","El diario de comisiones no utiliza flujo de trabajo; se basa en el acceso de seguridad que se la da a una persona en el sistema. "],[" ","Nota",": ","También puede ver la prueba de auditoría desde dentro de la transacción del Balance de comprobación haciendo clic en el menú Pista de auditoría en la parte superior de la página."]],"6":[[" ","Lista de comprobación de cierre de final de mes"],[" ","Nota importante sobre esta guía:"],[" ","Completar contabilizaciones de transacciones en módulos de libros auxiliares"],[" ","Realizar la contabilidad de empresas vinculadas"],[" ","Contabilizar los diarios de asignaciones"],[" ","Verificar/comprobar la finalización de las tareas"],[" ","Calcular las entradas de ICR, contabilizar diario y enviar a HQ para su carga"],[" ","Completar las conciliaciones de libro auxiliar a libro mayor"],[" ","Completar todas las otras conciliaciones de cuentas"],[" ","Generar informes una vez completado el cierre de final de mes"]],"id":"18"})