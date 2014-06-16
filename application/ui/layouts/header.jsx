/** @jsx React.DOM */
'use strict';

var React             = require('react');
var cx                = require('react/lib/cx');
var dispatcher        = require('synapse-common/lib/dispatcher');

module.exports = React.createClass({

    displayName : 'SiteHeader',

    toggleOAuthPanel : function()
    {
        dispatcher.emit('toggleOauthPanel');
    },

    render : function()
    {
        var oAuthLinkClasses = cx({
            'header__auth'      : true,
            'fa'                : true,
            'fa-lock'           : this.props.hasOAuth,
            'fa-unlock-alt'     : ! this.props.hasOAuth
        });

        return (
            <div>
                <header className="header">
                    <span className="header__branding">Lively</span>
                    <span className={oAuthLinkClasses} onClick={this.toggleOAuthPanel}>{'OAuth2'}</span>
                </header>
                {this.props.children}
            </div>
        );
    }
});
