/*==================================
=            Main React file       =
==================================*/

/**
* Main container
**/
var FormBox = React.createClass({
  getInitialState: function() {
    return {data: {objects: []}};
  },
  loadCommentsFromServer: function() {
    $.ajax({
      url: this.props.url,
      type: 'GET',
      contentType: 'application/json',
      dataType: 'json',
      success: function(data, textStatus, jqXHR) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  componentDidMount: function() {
    this.loadCommentsFromServer();
  },
  render: function() {
    return (
      <div className="formBox">
      <h1> Dynamic Form Builder Version 0.1 </h1>
      <FormList data={this.state.data}/>
      <AddForm />
      </div>
      );
  }
});

/**
* List Container for GenericForm objects
**/
var FormList = React.createClass({
  render: function() {
    // var formNodes;
    var formNodes = this.props.data.objects.map(function (object) {
      return (
        <GenericForm title={object.title} created_at={object.created_at}>
        {object.content}
        </GenericForm>
        );
    });
    return (
      <div className="row FormList">
      {formNodes}
      </div>
      );
  }
});


/**
* Generic form object
**/
var GenericForm = React.createClass({
  render: function() {
    return (
      <div className="col-md-4">
        <div className="panel panel-default GenericForm">
            <div className="panel-heading">
                <h3 className="panel-title">{this.props.title}</h3>
            </div>
            <div className="panel-body">
                {this.props.children}
            </div>
            <h5>{this.props.created_at}</h5>
        </div>
      </div>
      );
  }
});



/*-----  Unimplemented  ------*/
/**
* Add new GenericForm - TODO
**/
var AddForm = React.createClass({
  render: function() {
    return (
      <div className="AddForm">
      I am AddForm - UNIMPLEMENTED!
      </div>
      );
  }
});


React.render(
  <FormBox url='http://localhost:8000/posts/api/post/'/>,
  document.getElementById('content')
  );
