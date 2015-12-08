			//Memory Game
      var MemoryGameCard = React.createClass({
        render: function () {
          return (
						<div className="card">
							<div className="card-inner">
								<div className="logo"></div>
								<div className="card-content">
									<i className="fa"></i>
								</div>		
							</div>						
						</div>					
					);
        }
      });
			
      var MemoryGameBoard = React.createClass({
        render: function () {
          return (
						<div className='card-box'>
							<MemoryGameCard /><MemoryGameCard /><MemoryGameCard /><MemoryGameCard />
							<MemoryGameCard /><MemoryGameCard /><MemoryGameCard /><MemoryGameCard />
							<MemoryGameCard /><MemoryGameCard /><MemoryGameCard /><MemoryGameCard />
							<div className='card-align'>
								<button type="button" className="btn btn-default resetCards">Reset</button><span className="float-text-right">Moves: <span className="numMoves"></span></span>
							</div>
						</div>
					);
        }
      });			
					 
      ReactDOM.render(
        <MemoryGameBoard />,
        document.getElementById('memoryGameBoard')
      );
			
			//Modal (used for multiple games)
      var ModalHeader = React.createClass({
        render: function () {
          return (
						<div className="modal-header">
							<button type="button" className="close" title="Close" data-dismiss="modal"><span>&times;</span></button>						
							<h4 className="modal-title logo-text"></h4>
						</div>					
					);
        }
      });			
      var ModalBody = React.createClass({
        render: function () {
          return (
						<div className="modal-body">
							<p className="modalMessage"></p>
						</div>					
					);
        }
      });			
      var ModalFooter = React.createClass({
        render: function () {
          return (
						<div className="modal-footer">
							<button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
						</div>					
					);
        }
      });		

      var ModalDialog = React.createClass({
        render: function () {
          return (
						<div className="modal-dialog modal-sm">
							<div className="modal-content">
								<ModalHeader />
								<ModalBody />
								<ModalFooter />
							</div>	
						</div>					
					);
        }
      });			

      ReactDOM.render(
        <ModalDialog />,
        document.getElementById('modalDialog')
      );			

			//Mad Libs
      var MadLibsInput = React.createClass({
        render: function () {
          return (
						<div className="form-group">
							<label className="madLibsLabel hidden-xs"></label>
							<input type="text" className="form-control madLibsInput" placeholder="" />
						</div>		
					);
        }
      });			

      var MadLibsForm = React.createClass({
        render: function () {
          return (
						<form className="form" id="madLibsForm">
								<MadLibsInput />
								<MadLibsInput />					
								<MadLibsInput />
								<MadLibsInput />
								<MadLibsInput />		
								<MadLibsInput />
								<MadLibsInput />
								<MadLibsInput />					
								<button type="button" className="btn btn-default" id="madLibsCreate">Create Story</button>			
						</form>
					);
        }
      });			

      ReactDOM.render(
        <MadLibsForm />,
        document.getElementById('madLibsFormWrapper')
      );						
			