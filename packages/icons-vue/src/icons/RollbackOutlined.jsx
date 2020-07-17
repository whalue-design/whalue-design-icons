// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import RollbackOutlinedSvg from '@whalue-design/icons-svg/lib/asn/RollbackOutlined';

export default {
  name: 'IconRollbackOutlined',
  displayName: 'RollbackOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: RollbackOutlinedSvg } },
      children,
    ),
};