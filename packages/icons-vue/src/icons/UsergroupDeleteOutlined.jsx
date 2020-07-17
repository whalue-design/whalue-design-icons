// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import UsergroupDeleteOutlinedSvg from '@whalue-design/icons-svg/lib/asn/UsergroupDeleteOutlined';

export default {
  name: 'IconUsergroupDeleteOutlined',
  displayName: 'UsergroupDeleteOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: UsergroupDeleteOutlinedSvg } },
      children,
    ),
};