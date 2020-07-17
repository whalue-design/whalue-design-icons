// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import SyncOutlinedSvg from '@whalue-design/icons-svg/lib/asn/SyncOutlined';

export default {
  name: 'IconSyncOutlined',
  displayName: 'SyncOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: SyncOutlinedSvg } },
      children,
    ),
};