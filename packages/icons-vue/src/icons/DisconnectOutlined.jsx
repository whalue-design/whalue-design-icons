// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import DisconnectOutlinedSvg from '@whalue-design/icons-svg/lib/asn/DisconnectOutlined';

export default {
  name: 'IconDisconnectOutlined',
  displayName: 'DisconnectOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: DisconnectOutlinedSvg } },
      children,
    ),
};