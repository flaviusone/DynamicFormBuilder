/**
* List Container for GenericForm objects
**/
var FormList = React.createClass({
  render: function() {
    // var formNodes;
    var uniquekey = -1; // For Reconciliation
    var formNodes = this.props.resource.objects.map(function (object) {
      uniquekey++;
      return (
        <GenericForm key={uniquekey} object={object} schema={this.props.schema} unmount_element={this.props.unmount_element} handleEdit={this.props.handleEdit}>
        </GenericForm>
        );
    }.bind(this));
    return (
      <div className="row FormList">
      {formNodes}
      </div>
      );
  }
});