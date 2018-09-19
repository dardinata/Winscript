		$(document).ready(function() {
		var table = $('#example').DataTable( {					
				
					"ajax": {
							 "url":  "https://sscn.bkn.go.id/public/data_noexist/pendaftar_dashboard_prod.js"
						 },  
					 "deferRender": true,           		
					"columns": [
						{ "data": "ROWNUM" },
						{ "data": "PENDIDIKAN_NM" },
						{ "data": "JAB_NM" },
						{ "data": "INS_NM" },
						{ "data": "JENIS_FORMASI_NM" },
						{ "data": "LOKASI_NM" },
						{ "data": "JUM_PERJAB" },
						{ "data": "JUM_PENDAFTAR" },
						{ "data": "LINK_WEB_INS_DAFTAR" }

      				  ],
					  "columnDefs": [ 
					  {
						"targets": 8,
						"render": function ( data, type, row, meta ) {
						  return data == '' ? '' : '<a href="'+data+'" target="_blank">Download</a>';
						}
					  } ],

			   	dom: 'lr<"table-filter-container">tip',
					initComplete: function(settings){
					var api = new $.fn.dataTable.Api( settings );
					  $('.table-filter-container', api.table().container()).append(
						 $('#table-filter').detach().show()
					  );
					  
					  $('#table-filter select').on('change', function(){
						 table.search(this.value).draw();   
					  });       
				   },
   	
    
	});
       
  
 

	var dtable = $('#example').DataTable();
				$('.dataTables_filter').addClass('hide-search');
				$('.filter').on('keyup change', function() {
				  //clear global search values
				  dtable.search('');
				  dtable.column($(this).data('columnIndex')).search(this.value).draw();
				});

				$(".dataTables_filter input").on('keyup change', function() {
				  //clear column search values
				  dtable.columns().search('');
				  //clear input values
				  $('.filter').val('');
				}); 
		} );