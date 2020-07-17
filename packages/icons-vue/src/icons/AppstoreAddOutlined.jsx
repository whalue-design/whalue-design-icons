// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import AppstoreAddOutlinedSvg from '@whalue-design/icons-svg/lib/asn/AppstoreAddOutlined';

export default {
  name: 'IconAppstoreAddOutlined',
  displayName: 'AppstoreAddOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: AppstoreAddOutlinedSvg } },
      children,
    ),
};